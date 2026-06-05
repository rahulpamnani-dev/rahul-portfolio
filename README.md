# Rahul Pamnani – Portfolio Website

A full-stack portfolio built with **Angular 17 + Angular Material** (frontend) and **Node.js + Express** (backend).

---

## 📁 Project Structure

```
rahul-portfolio/
├── frontend/        ← Angular 17 app
│   └── src/app/
│       ├── components/
│       │   ├── navbar/
│       │   ├── hero/
│       │   ├── about/
│       │   ├── experience/
│       │   ├── skills/
│       │   ├── projects/
│       │   ├── contact/
│       │   └── footer/
│       └── services/
│           └── portfolio.service.ts
└── backend/         ← Node.js + Express REST API
    └── src/
        └── server.js
```

---

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev       # Runs on http://localhost:3000
```

### 2. Frontend Setup

```bash
cd frontend
npm install
ng serve          # Runs on http://localhost:4200
```

Open http://localhost:4200 in your browser.

---

## 🌐 API Endpoints

| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| GET    | /api/portfolio            | Full portfolio data     |
| GET    | /api/portfolio/personal   | Personal info           |
| GET    | /api/portfolio/experience | Work experience         |
| GET    | /api/portfolio/skills     | Skills list             |
| GET    | /api/portfolio/projects   | Projects list           |
| GET    | /api/portfolio/education  | Education info          |
| POST   | /api/contact              | Send contact form       |

---

## ✨ Features

- Animated hero with typewriter effect
- Timeline-based work experience section
- Skills grouped by category
- Project cards with hover effects
- Contact form wired to backend
- Responsive (mobile-friendly)
- Dark tech aesthetic with cyan accent

---

## 🛠 Tech Stack

- **Frontend**: Angular 17, Angular Material, RxJS, TypeScript, SCSS
- **Backend**: Node.js, Express, Nodemailer
- **Design**: Custom dark theme, CSS animations, Google Fonts

---

## 📧 Contact Form Email Setup

To enable real email sending in `backend/src/server.js`, configure Nodemailer:

```js
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'your@gmail.com', pass: 'your-app-password' }
});
```

---

## 🏗 Build for Production

```bash
# Frontend
cd frontend && ng build --configuration production

# Backend
cd backend && npm start
```
