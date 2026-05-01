# 🚀 Team Task Manager (Full Stack)

A full-stack web application where users can create projects, assign tasks, and track progress with role-based access control (Admin & Member).

---


## 📦 GitHub Repository

(Add your repo link here)

---

## 🎯 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing

### 👥 Role-Based Access

* **Admin**

  * Create projects
  * Add members
  * Create & delete tasks
* **Member**

  * View assigned tasks
  * Update task status

### 📁 Project Management

* Create projects
* Add team members
* View project list

### ✅ Task Management

* Create tasks
* Assign tasks to users
* Update task status (Todo / In Progress / Done)

### 📊 Dashboard

* Total tasks
* Completed tasks
* Overdue tasks
* Tasks assigned to logged-in user

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Deployment

* Backend: Railway
* Frontend: Vercel

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Auth

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Projects

* POST `/api/projects`
* GET `/api/projects`
* POST `/api/projects/:id/add-member`

### Tasks

* POST `/api/tasks`
* GET `/api/tasks`
* PATCH `/api/tasks/:id`
* DELETE `/api/tasks/:id`

---

## 📸 Demo Video

(Add your demo video link here)

---

## 📌 Future Improvements

* Task filtering & search
* UI enhancements (Tailwind CSS)
* Notifications
* Drag & drop task board

---

## 👨‍💻 Author

Mohd Anas

---

## 📜 License

This project is for assignment purposes only.
