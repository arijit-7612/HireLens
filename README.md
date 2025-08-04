# 💼 HireLens – AI-Powered Applicant Tracking System

HireLens is an **AI-powered Applicant Tracking System (ATS)** that automates resume screening and candidate-job matching.  
It leverages **React (Vite)** for the frontend and **Node.js** with **AI models** for intelligent hiring automation.

---

## 🚀 Features

- 📄 Upload resumes (PDF) and extract candidate details  
- 🤖 AI-powered ranking against job descriptions  
- 🏢 Manage job postings and candidate applications  
- 📊 Modern dashboard for recruiters  
- ☁️ Cloud-ready architecture with database integration  

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- ShadCN UI / Radix UI (optional)
- Framer Motion (animations)

### Backend
- Node.js + Express
- OpenAI API / HuggingFace for AI
- PDF parsing libraries for resume analysis

### Database
- MongoDB (or PostgreSQL)

### Deployment
- Frontend: Vercel / Netlify
- Backend: Railway / Render
- Database: MongoDB Atlas

---

## 📦 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/arijit-7612/HireLens.git
cd HireLens
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Run the development server

bash
Copy
Edit
npm run dev
4️⃣ Backend setup (optional if using AI APIs)

bash
Copy
Edit
cd server
npm install
npm run dev
🧠 AI Integration
Uses OpenAI API / HuggingFace to analyze resumes and job descriptions

Provides fit scores for each candidate

