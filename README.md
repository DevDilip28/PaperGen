# 🚀 PaperGen — AI Assessment Creation Platform

Live App: https://papergen-gilt.vercel.app/

---

## Dashboard

* AI-generated assignments
* Real-time status updates
* Assignment management

## Assignment Generator

* Dynamic assignment creation form
* AI-powered question generation
* Structured exam paper output

## Generated Paper

* Professional exam-style layout
* Section-based formatting
* Difficulty tags and marks distribution

---

# 🎯 Project Overview

PaperGen is a full-stack AI-powered assessment generation platform built as part of a full-stack engineering assignment.

The system allows teachers to:

* Create assignments
* Configure question structures
* Generate AI-powered question papers
* View structured exam outputs
* Manage generated assessments

The project focuses on scalable backend architecture, real-time workflows, clean UI/UX, and production-style asynchronous processing.

---

# 🧠 How It Works

Teacher Input → API → Queue → AI Generation → Validation → Database → Frontend Update

## Workflow

1. Teacher creates assignment
2. Backend stores assignment in MongoDB
3. Job added to BullMQ queue
4. Worker processes AI generation
5. LLM generates structured JSON response
6. Response validated using Zod
7. Assignment stored in database
8. Frontend polls and displays final paper

---

# 🏗️ System Architecture

Frontend (Next.js)
↓
API Layer (Express + TypeScript)
↓
BullMQ Queue
↓
Worker Service
↓
LLM Generation (Groq / Llama)
↓
Validation Layer (Zod)
↓
MongoDB + Redis

---

# ⚙️ Tech Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* Axios

## Backend

* Node.js
* Express
* TypeScript
* MongoDB
* BullMQ
* Redis
* Socket.IO

## AI

* Groq API
* Llama Model

## Deployment

* Vercel (Frontend)
* Render (Backend + Worker)
* Upstash Redis
* MongoDB Atlas

---

# ✨ Features

* AI-powered question paper generation
* Section-wise structured paper format
* Real-time assignment processing
* Queue-based architecture using BullMQ
* Redis-backed background jobs
* Responsive SaaS-style UI
* Dynamic assignment dashboard
* Assignment deletion support
* Validation using Zod schemas
* Clean exam-paper formatting

---

# 📄 Question Paper Structure

Generated papers include:

* Student information section
* Multiple sections (A, B, etc.)
* Difficulty labels
* Marks distribution
* Structured questions
* Exam-style formatting

---

# 📡 API Endpoints

## Generate Assignment

POST `/api/assignments/generate`

Request Body:

```json
{
  "topic": "Data Warehousing and Data Mining",
  "questionTypes": [
    {
      "type": "Short Answer",
      "count": 5,
      "marks": 2
    }
  ]
}
```

---

## Get All Assignments

GET `/api/assignments`

---

## Get Assignment By ID

GET `/api/assignments/:id`

---

## Delete Assignment

DELETE `/api/assignments/:id`

---

# 🧩 Key Design Decisions

## Queue-Based Processing

BullMQ + Redis used to handle AI generation asynchronously.

## Structured AI Output

LLM responses are parsed and validated instead of rendering raw AI text.

## Separation of Concerns

* Controller Layer
* Queue Layer
* Worker Layer
* Validation Layer
* Service Layer

## Real-Time Architecture

Socket.IO integrated for generation status updates.

---

# 🚀 Local Setup

## 1. Clone Repository

```bash
git clone https://github.com/DevDilip28/PaperGen.git

cd PaperGen
```

---

# Backend Setup

```bash
cd server

npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URL=your_mongodb_url

GROQ_API_KEY=your_groq_api_key

REDIS_URL=your_redis_url
```

Run Backend

```bash
npm run dev
```

Run Worker

```bash
npm run worker
```

---

# Frontend Setup

```bash
cd client

npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# 🔧 Future Improvements

* PDF export support
* Authentication system
* WebSocket-based live updates
* Assignment analytics dashboard
* AI prompt customization
* Teacher collaboration system
* Rich text editor
* Advanced filtering & search

---

# 📌 About This Project

This project was built as part of a Full Stack Engineering assignment with the goal of demonstrating:

* Full-stack development skills
* AI integration workflows
* Queue-based architectures
* Real-time systems
* Backend scalability concepts
* Production-style application structure

---

# 👨‍💻 Author

## Dilip Asdeo

* GitHub: https://github.com/DevDilip28
* LinkedIn: https://www.linkedin.com/in/dilip-asdeo/

---

# 🏁 Final Note

This project focuses on practical architecture, asynchronous AI workflows, clean system design, and production-oriented engineering practices while maintaining a polished and responsive user experience.
