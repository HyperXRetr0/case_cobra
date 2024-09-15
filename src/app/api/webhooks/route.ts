import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { ShippingAddress } from "@prisma/client";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");
    if (!signature) {
      return new Response("Invalid Signature", { status: 400 });
    }
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Missing user email");
      }
      const session = event.data.object as Stripe.Checkout.Session;
      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };
      if (!userId || !orderId) {
        throw new Error("Invalid request metadata");
      }
      const billingAddress = session.customer_details?.address;
      const shippingAddress = session.shipping_details?.address;
      const shippingAddressAppend = db.shippingAddress.create({
        data: {
          name: session.customer_details?.name!,
          city: shippingAddress?.city!,
          country: shippingAddress?.country!,
          postalCode: shippingAddress?.postal_code!,
          street: shippingAddress?.line1!,
          state: shippingAddress?.state,
          orderId,
        },
      });
      const billingAddressAppend = db.billingAddress.create({
        data: {
          name: session.customer_details?.name!,
          city: shippingAddress?.city!,
          country: shippingAddress?.country!,
          postalCode: shippingAddress?.postal_code!,
          street: shippingAddress?.line1!,
          state: shippingAddress?.state,
          orderId,
        },
      });
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddressId: (await shippingAddressAppend).id,
          billingAddressId: (await billingAddressAppend).id,
        },
      });
    }
    return NextResponse.json({ result: event, ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", ok: false },
      { status: 500 }
    );
  }
}
