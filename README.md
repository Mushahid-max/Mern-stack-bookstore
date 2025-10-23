# 📚 MERN Stack Bookstore

A full-stack **Bookstore web application** built with **MERN (MongoDB, Express, React, Node.js)**.  
Users can browse free and paid books, register/login, and purchase books online.

---

## 🧭 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [Author](#author)
- [License](#license)

---

## 🚀 Features
- User Authentication (Register/Login/Logout)  
- Browse free and paid books  
- Add books to cart and purchase online  
- Payment integration using **Razorpay**  
- Responsive UI  

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js, Tailwind CSS |
| Backend  | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT (JSON Web Token) |
| Payment Gateway | Razorpay |
| Version Control | Git & GitHub |

---

## 🗂️ Project Structure

bookstore/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── App.js
│ └── package.json
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Mushahid-max/Mern-stack-bookstore.git
cd Mern-stack-bookstore
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file based on .env.example

Set your MongoDB URI and Razorpay keys

Start the backend server:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd ../frontend
npm install
npm start
React app will run at: http://localhost:3000


🙌 Author
Mushahid Khan
🎓 B.Sc IT Student | MERN & Laravel Developer
🌐 GitHub: Mushahid-max
