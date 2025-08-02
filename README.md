# 🌐 My Portfolio Website

Welcome to my personal developer portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion**. It showcases my skills, featured projects, and a contact form powered by **EmailJS**.

> 🔴 Live: [https://my-portfolio-aditya.vercel.app](https://my-portfolio-uoiw.vercel.app/)  
> 📂 GitHub: [https://github.com/cyberfortify/my-portfolio](https://github.com/cyberfortify/my-portfolio)



## 🚀 Features

- ✨ Clean & modern UI using **Tailwind CSS**
- 🎞️ Smooth animations with **Framer Motion**
- 📱 Fully responsive for all screen sizes
- 📬 Contact form integrated with **EmailJS**
- 💼 Showcases featured GitHub projects
- 🌙 Dark mode ready (optional for future)



## 🛠 Tech Stack

- **React.js**
- **Tailwind CSS**
- **Framer Motion**
- **React Router**
- **EmailJS**
- **Vercel** (Deployment)



## 📸 Screenshots

| Home Page | Projects | Contact |
|----------|----------|---------|
| ![home](./home.png) 



## 📩 Contact Form Setup

This project uses **EmailJS** to send contact form submissions to your email inbox.

1. Create an account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Get the **Service ID**, **Template ID**, and **Public Key**
3. Create a `.env.local` file in the root of your project:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
````

4. The contact form is located in: `src/components/Contact.jsx`



## ⚙️ Run Locally

```bash
git clone https://github.com/cyberfortify/my-portfolio.git
cd my-portfolio
npm install --legacy-peer-deps
npm run dev
```


## 🚀 Deploy

This project is deployed on **Vercel**. You can deploy it yourself by:

```bash
npx vercel
```

Make sure to add your EmailJS environment variables in Vercel settings → Project → Environment Variables.



## 📄 License

This project is licensed under the [MIT License](LICENSE).



## 🙋‍♂️ Author

**Aditya Vishwakarma**
[![GitHub](https://img.shields.io/badge/GitHub-cyberfortify-181717?style=flat\&logo=github)](https://github.com/cyberfortify)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat\&logo=linkedin)](https://www.linkedin.com/in/aditya-vk-professional)

