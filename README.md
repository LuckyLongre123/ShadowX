<div align="center">

# ShadowX

**Full-Stack Developer Portfolio Platform**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-0A66C2?style=for-the-badge&logo=vercel&logoColor=white)](https://shadowx-frontend.onrender.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lucky_Longre-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucky-longre/)
[![Portfolio](https://img.shields.io/badge/Portfolio-View-brightgreen?style=for-the-badge)](https://lucky-longre.onrender.com/)

![React](https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

</div>

---

ShadowX is not just a portfolio — it's a full-stack MERN platform with JWT and Google OAuth authentication, a role-based admin dashboard, real-time chat, an academic activity tracker, file uploads, and visitor analytics. Built from scratch as a personal platform to demonstrate full-stack development skills.

---

## Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [API Reference](#api-reference)
8. [Screenshots](#screenshots)
9. [Author](#author)

---

## Features

### Authentication & Security
- JWT-based login, signup, and protected routes
- Google OAuth 2.0 integration
- Forgot password and change password flows
- Role-based access control — Admin and User roles
- Input validation using Zod with custom error middleware
- Admin-only middleware protecting sensitive routes

### Admin Dashboard
- View and manage all registered users
- Read and respond to contact form messages
- Manage portfolio projects (add / edit / delete)
- Real-time chat interface for admin-visitor communication
- File upload management via Multer
- Visitor analytics — total visit tracking across sessions

### Logged-in User Features
- Edit profile with image upload
- Assignments tracker — add, view, and manage subject-wise assignments per semester
- Practicals tracker — semester-wise practical records with add/edit/delete actions
- Subject selection per semester with structured data
- Explore section for browsing content

### Frontend
- React 18 with Vite for fast development and builds
- Tailwind CSS for utility-first, responsive styling
- Dark / light mode toggle via React Context API (ThemeContext)
- Fully responsive — dedicated mobile navigation menu
- 30+ modular, reusable components
- Smooth scroll navigation, loader states, 404 handling

---

## Architecture

```
┌──────────────────────────────────────┐
│              Frontend                │
│   React 18 · Vite · Tailwind CSS     │
│                                      │
│  Public: Welcome, Projects, Contact  │
│  Auth:   SignIn, SignUp, OAuth        │
│  User:   Profile, Activities, Explore│
│  Admin:  Dashboard, Chat, Users      │
└─────────────────┬────────────────────┘
                  │ REST API (Axios)
                  ▼
┌──────────────────────────────────────┐
│              Backend                 │
│   Node.js · Express · JWT            │
│                                      │
│  /api/auth      → Auth routes        │
│  /api/admin     → Admin routes       │
│  /api/contact   → Contact routes     │
│  /api/projects  → Project routes     │
│  /api/visits    → Analytics routes   │
│  /api/upload    → File upload routes │
└─────────────────┬────────────────────┘
                  │ Mongoose ORM
                  ▼
         ┌────────────────┐
         │    MongoDB      │
         │ (Atlas / local) │
         └────────────────┘
```

---

## Tech Stack

### Backend

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose ODM) |
| Authentication | JWT (jsonwebtoken) + bcrypt |
| OAuth | Google OAuth 2.0 |
| File Uploads | Multer |
| Validation | Zod |
| Security | Helmet · CORS · Error middleware |

### Frontend

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State | React Context API |
| HTTP Client | Axios |
| Icons | Lucide React · React Icons |

---

## Project Structure

```
ShadowX/
├── server/                          # Express backend
│   ├── controllers/
│   │   ├── admin-controller.js      # Admin CRUD logic
│   │   ├── auth-controller.js       # Register, login, password flows
│   │   ├── contact-controller.js    # Contact form handling
│   │   ├── oauth-controller.js      # Google OAuth logic
│   │   └── project-controller.js   # Portfolio project management
│   ├── middlewares/
│   │   ├── admin-middleware.js      # Admin role guard
│   │   ├── auth-middleware.js       # JWT verification
│   │   ├── error-middleware.js      # Global error handler
│   │   └── validate-middleware.js  # Zod schema validation
│   ├── models/
│   │   ├── user-model.js
│   │   ├── project-model.js
│   │   ├── contact-model.js
│   │   └── totalVisites-model.js   # Visitor analytics
│   ├── router/
│   │   ├── auth-router.js
│   │   ├── admin-router.js
│   │   ├── contact-router.js
│   │   ├── project-router.js
│   │   ├── totalVisits-router.js
│   │   └── upload-router.js
│   ├── utils/
│   │   ├── db.js                   # MongoDB connection
│   │   └── oauthClient.js          # Google OAuth client config
│   ├── validators/
│   │   ├── auth-validator.js       # Zod schema for auth
│   │   └── contact-validator.js    # Zod schema for contact
│   └── server.js                   # Express app entry point
│
└── src/                             # React frontend
    ├── components/
    │   ├── common/
    │   │   ├── Modal.jsx
    │   │   └── ThemeToggle.jsx
    │   ├── layouts/
    │   │   ├── AdminLayout.jsx
    │   │   └── ChatLayout.jsx
    │   ├── LoggedIn/
    │   │   ├── Activities/
    │   │   │   ├── Assignments/    # Add, Show, Card, Actions
    │   │   │   ├── Practicals/     # Add, Show, Card, Actions
    │   │   │   ├── Activities.jsx
    │   │   │   └── SelectSubjects.jsx
    │   │   ├── EditProfile.jsx
    │   │   ├── Explore.jsx
    │   │   └── Profile.jsx
    │   ├── AdminChat.jsx
    │   ├── AdminMessages.jsx
    │   ├── AdminProjects.jsx
    │   ├── AdminUsers.jsx
    │   ├── SignIn.jsx / SignUp.jsx
    │   ├── ForgotPassword.jsx
    │   ├── ChangePassword.jsx
    │   └── ...30+ components
    ├── context/
    │   ├── ThemeContext.jsx         # Dark/light mode
    │   └── OAuthContext.jsx        # Google OAuth state
    ├── wrappers/
    │   └── GoogleWrapper.jsx
    └── App.jsx                      # Route definitions
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18.x
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Google OAuth credentials — [Google Cloud Console](https://console.cloud.google.com/)

### Backend Setup

```bash
# 1. Navigate to the server directory
cd server

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.sample .env
# Edit .env with your values — see Environment Variables section

# 4. Start the development server
npm run dev
```

Backend runs on `http://localhost:5000` by default.

### Frontend Setup

```bash
# 1. From the root directory, install dependencies
npm install

# 2. Configure environment variables
cp .env.sample .env
# Set VITE_BACKEND_URL to your backend URL

# 3. Start the development server
npm run dev
```

Frontend runs on `http://localhost:5173`.

---

## Environment Variables

### `server/.env`

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Port for Express server (default: 5000) |
| `MONGO_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | Secret key for JWT signing |
| `JWT_EXPIRY` | No | Token expiry duration (e.g. `7d`) |
| `GOOGLE_CLIENT_ID` | Yes | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Yes | Google OAuth client secret |
| `FRONTEND_URL` | Yes | Allowed CORS origin |

### `.env` (Frontend)

| Variable | Required | Description |
|---|---|---|
| `VITE_BACKEND_URL` | Yes | Backend API base URL |
| `VITE_GOOGLE_CLIENT_ID` | Yes | Google OAuth client ID (for frontend) |

---

## API Reference

All endpoints are prefixed with `/api`.

### Auth Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/auth/register` | — | Register new user |
| `POST` | `/auth/login` | — | Login with email/password |
| `POST` | `/auth/google` | — | Google OAuth login |
| `POST` | `/auth/forgot-password` | — | Send password reset email |
| `POST` | `/auth/change-password` | JWT | Change authenticated user's password |

### Admin Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/admin/users` | Admin | Get all users |
| `PUT` | `/admin/users/:id` | Admin | Update a user |
| `DELETE` | `/admin/users/:id` | Admin | Delete a user |
| `GET` | `/admin/messages` | Admin | Get all contact messages |

### Project Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/projects` | — | Get all portfolio projects |
| `POST` | `/projects` | Admin | Add a new project |
| `PUT` | `/projects/:id` | Admin | Update a project |
| `DELETE` | `/projects/:id` | Admin | Delete a project |

### Other Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/contact` | — | Submit contact form message |
| `POST` | `/upload` | JWT | Upload profile image |
| `GET` | `/visits` | — | Get visitor count |
| `POST` | `/visits` | — | Increment visitor count |

---

## Author

**Lucky Longre**
B.Voc Software Development · Ramanujan College, University of Delhi

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-0A66C2?style=flat-square)](https://lucky-longre.onrender.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/lucky-longre/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/LuckyLongre123)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=flat-square&logo=gmail)](mailto:officialluckylongre@gmail.com)

---

<div align="center">
  <p>Built with React · Node.js · MongoDB · Google OAuth</p>
</div>
