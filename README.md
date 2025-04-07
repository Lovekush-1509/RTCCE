# RTCCE
# 🧑‍💻 Real-Time Collaborative Code Editor

A real-time collaborative code editor web app where multiple users can edit and run code together live — just like Google Docs for code!  
Built with **React.js**, **Node.js**, **Express**, **Socket.io**, **MongoDB**, and **Judge0 API**.

---

## ✨ Features

- 🧠 **User Authentication** (Login & Signup)
- 📝 **Real-Time Collaborative Code Editing**
- 🧪 **Live Code Execution** via Judge0 API
- 📁 File creation and switching
- 👥 Online users visibility in the room
- 🔒 Secure sessions with bcrypt and MongoDB

---

## 🛠️ Tech Stack

### 🔹 Frontend:
- **React.js**
- **Socket.io-client**
- **Monaco Editor** (VS Code style)
- **React Router**
- **Custom CSS/Tailwind**

### 🔹 Backend:
- **Node.js + Express.js**
- **Socket.io**
- **MongoDB + Mongoose**
- **Bcrypt.js** for password hashing
- **Judge0 API** for code execution
- **JWT or Sessions**

---
## ⚙️ Setup Instructions

### 🚀 Clone the Repository

```bash
https://github.com/Lovekush-1509/RTCCE.git
cd RTCCE
```


🔧 Setup Backend (Server)
```bash
cd server
npm install
```
Create a .env file in server root dir and fill with ..
```bash
MONGO_URI=your_mongodb_connection_string
JUDGE_API_URL=https://judge0-ce.p.rapidapi.com/submissions
JUDGE_API_KEY=your_judge0_api_key
PORT=4000
```

🔧 Setup frontend (client)
```bash
cd ..
cd client
npm install
```
🔧 run frontend and backend cuncurently
check you should be in RTCCE then run cmd
```bash
cd ..
npm run dev
```

