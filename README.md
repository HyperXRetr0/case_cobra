# 📱 Case Cobra
![screenshot](https://github.com/HyperXRetr0/case_cobra/blob/main/public/readme_main.png)

Welcome to Case Cobra – the ultimate platform for designing and purchasing customized phone case covers! This web application empowers users to create unique and personalized phone cases by adding their custom images, dragging and positioning them anywhere on the canvas, and selecting from multiple premium options.


## ✨ Features

- 🖼️ Custom Image Upload: Upload and position your images freely on the phone case canvas.
- 🎨 Canvas Customization: Drag and drop images anywhere on the canvas to design your perfect phone case.
- 💎 Premium Options: Choose from multiple premium options to enhance your phone case design.
- 💳 Secure Payments with Stripe: Seamless and secure payment processing powered by Stripe.
- 🛒 Easy Checkout: Smooth and user-friendly checkout process to purchase your customized phone case.


## 🛠️ Tech Stack
- ⚛️ Next.js
- 🐘 Neon Tech (Postgres)
- 🌐 Prisma
- 🔐 Kinde Auth
- 🔧 React RND
- 📦 Zod
- 📤 UploadThing
- 💸 Stripe
- 🎥 Framer Motion
- 🎨 TailwindCSS
- 🧩 Headless UI
- 🎨 ShadCN
- 🔗 Lucide Icons


## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/HyperXRetr0/case_cobra.git
cd case-cobra
```
Install dependencies:
```bash
npm install
```
Set up environment variables:
- Create a .env file and add your environment variables.
```
KINDE_CLIENT_ID=
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
STRIPE_WEBHOOK_SECRET=
ADMIN_EMAIL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
DATABASE_URL=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback
```
Run the development server:
```bash
npm run dev
```
Open your browser:
- Visit http://localhost:3000 to see the application in action.
    
## 📜 Documentation
For more detailed information on the tech stack and libraries used:
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe Documentation](https://stripe.com/in)
- [Kinde Auth Documentation](https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/)
- [Headless UI Documentation](https://headlessui.com)
- [ShadCN Documentation](https://ui.shadcn.com/docs/installation/next)
