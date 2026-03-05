# 🎬 CineSight AI – Movie Insight Analyzer

CineSight AI is a full-stack web application that analyzes movie data and generates audience sentiment insights using AI.

Users can enter an **IMDb movie ID** to instantly view movie details, audience reviews, and AI-powered sentiment analysis.

This project demonstrates **full-stack development, API integration, and AI-based analysis**.

---

# 🚀 Live Demo

Frontend (Vercel)

https://cinesight-ai.vercel.app

Backend API (Render)

https://cinesight-backend.onrender.com

Example API endpoint

https://cinesight-backend.onrender.com/api/insights/tt0133093

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/krishna729/cinesight-ai.git
cd cinesight-ai
```

---

## 2️⃣ Backend Setup

Navigate to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create `.env` file

```
PORT=5000
OMDB_API_KEY=your_omdb_api_key
TMDB_API_KEY=your_tmdb_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key
```

Run backend server

```bash
npm run server
```

Backend runs on

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Navigate to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create `.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

# 🧠 How the Application Works

1. User enters an IMDb movie ID
2. Frontend sends request to backend API
3. Backend fetches movie data from OMDB API
4. Backend generates audience reviews
5. Sentiment analysis is performed using HuggingFace AI
6. Results are returned to the frontend and displayed

---

# 🛠 Tech Stack Rationale

## Frontend

Next.js + React + TypeScript

Reason:

* Component-based UI architecture
* High performance
* Built-in routing
* Easy deployment with Vercel

---

## Backend

Node.js + Express.js

Reason:

* Lightweight REST API framework
* Fast asynchronous operations
* Easy integration with external APIs

---

## External APIs

### OMDB API

Used to fetch movie metadata:

* Title
* Year
* Plot
* Poster
* Cast
* IMDb rating

---

### HuggingFace API

Used for **AI sentiment analysis** on audience reviews.

---

## Deployment

Frontend → Vercel
Backend → Render

Reason:

* Free hosting
* Automatic CI/CD from GitHub
* Easy deployment setup

---

# 📌 Assumptions

1. User provides a **valid IMDb ID** (example: tt0133093).
2. Movie information availability depends on OMDB API.
3. Audience reviews are simulated for demonstration.
4. Sentiment analysis assumes reviews reflect audience opinions.
5. Free hosting (Render) may introduce **cold start delay** on first request.

---

# 📂 Project Structure

```
cinesight-ai
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── app
│   ├── components
│   ├── public
│   └── styles
│
└── README.md
```

---

# 🎯 Features

* Movie search using IMDb ID
* Movie details (poster, cast, plot)
* AI powered sentiment analysis
* Audience reviews display
* Responsive UI
* Dark mode support

---

# 👨‍💻 Author

Krishna Bera

GitHub
https://github.com/krishna729

LinkedIn
https://www.linkedin.com/in/krishna4236/

---

# 📄 License

This project is created for educational and assignment purposes.
