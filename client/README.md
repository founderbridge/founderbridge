# 🚀 FounderBridge

> Connecting startup founders with the right investors and co-founders.

FounderBridge is a full-stack web platform that bridges the gap between 
people with great startup ideas and people with the capital or skills to 
bring those ideas to life. Founders post their ideas, investors discover 
opportunities, and both connect through real-time chat — all powered by 
AI-driven pitch analysis and smart matching.

---

## ✨ Features

- 🔐 Role-based authentication (Founder / Investor / Co-founder)
- 📋 Startup idea posting with pitch deck upload
- 🔍 Browse and filter startups by category, stage, and funding range
- 🤝 Connection request system between founders and investors
- 💬 Real-time chat with file sharing (Socket.io)
- 📊 Founder dashboard with profile views and investor interest analytics
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Socket.io Client
- Axios
- React Router DOM
- Recharts (analytics)

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Socket.io
- JWT Authentication
- Bcrypt
- Multer + Cloudinary (file uploads)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL
- Cloudinary account

### Installation

# Clone the repository
git clone https://github.com/founderbridge/founderbridge.git
cd founderbridge

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

### Environment Variables

Create a .env file in the /server directory:

DATABASE_URL=postgresql://user:password@localhost:5432/founderbridge
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173

### Run the App

# Run backend (from /server)
npm run dev

# Run frontend (from /client)
npm run dev

---

## 🗄️ Database Schema

Key tables:
- users — stores all user roles and profile info
- startup_ideas — founder's startup posts with AI score
- categories — FinTech, HealthTech, EdTech, SaaS, etc.
- interests — connection requests between users
- conversations — chat sessions between matched users
- messages — individual chat messages with file support
- investor_preferences — investor's category and funding preferences

---

## 🙌 Contributing

Contributions are welcome! Please open an issue first 
to discuss what you'd like to change.

1. Fork the repo
2. Create your branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m 'Add your feature'
4. Push to branch: git push origin feature/your-feature
5. Open a pull request

---

## 📄 License
MIT License — feel free to use this project for learning or building upon.

---

⭐ If you found this project helpful, please give it a star!
