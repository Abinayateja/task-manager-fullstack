# 🚀 Task Management System - Full Stack Application

> A secure, full-stack task management application with JWT authentication, role-based access control, and RESTful API design.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.7-2D3748.svg)](https://www.prisma.io/)

---

## 🚀 Live Demo • 📂 Codebase • 📄 API Docs • 🎯 Backend Internship Assignment
🔗 Live App: https://task-manager-fullstack-1-pjxi.onrender.com

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Installation Guide](#installation-guide)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Security Implementation](#security-implementation)
- [Future Scalability Considerations](#future-scalability-considerations)
- [Screenshots & Demo](#screenshots--demo)
- [Contact](#contact)

---

## 🎯 Project Overview

A production-ready task management system that demonstrates modern full-stack development practices with secure authentication, role-based authorization, and a clean, intuitive user interface.

---

**Development Time:** 2 days  
**Assignment:** Backend Developer Internship - Primetrade.ai

### Key Achievements
✅ Secure JWT-based authentication with bcrypt password hashing  
✅ Role-based access control (User & Admin)  
✅ Complete RESTful API with proper status codes  
✅ PostgreSQL database with Prisma ORM  
✅ Responsive React frontend with protected routes  
✅ Input validation and error handling  
✅ Cloud SQL ready architecture  

---

## ✨ Features

### Backend Features
- **Authentication System**
  - User registration with email validation
  - Secure login with JWT token generation
  - Password hashing using bcrypt (10 salt rounds)
  - Token-based session management

- **Authorization**
  - Role-based middleware (USER and ADMIN roles)
  - Protected routes with JWT verification
  - Admin-only endpoints for user management

- **Task Management (CRUD)**
  - Create tasks with title, description, and status
  - Read all tasks for logged-in user with pagination
  - Update task details and status
  - Delete tasks with ownership verification
  - Filter tasks by status (PENDING, IN_PROGRESS, COMPLETED)

- **Admin Features**
  - View all users with task counts
  - View individual user details with their tasks
  - Delete users (with cascade delete of their tasks)
  - Pagination for user lists

- **API Design**
  - RESTful endpoints with proper HTTP methods
  - Consistent JSON response format
  - API versioning (`/api/v1`)
  - Comprehensive error handling
  - Input validation and sanitization

### Frontend Features
- **User Interface**
  - Clean, modern design with gradient backgrounds
  - Responsive layout for mobile and desktop
  - Intuitive navigation with protected routes

- **User Dashboard**
  - View all personal tasks in a card grid layout
  - Create new tasks with modal form
  - Edit existing tasks inline
  - Delete tasks with confirmation
  - Visual status indicators (color-coded)

- **Admin Dashboard**
  - View all registered users in a table
  - See task counts per user
  - View detailed user information with their tasks
  - Delete users with confirmation

- **User Experience**
  - Toast notifications for success/error messages
  - Form validation with helpful error messages
  - Loading states for async operations
  - Automatic token management
  - Logout functionality

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.x | JavaScript runtime |
| **Express.js** | 4.18.x | Web framework |
| **PostgreSQL** | 15.x | Relational database |
| **Prisma** | 5.7.x | Modern ORM with type safety |
| **JWT** | 9.0.x | Secure authentication tokens |
| **bcryptjs** | 2.4.x | Password hashing |
| **express-validator** | 7.0.x | Input validation & sanitization |
| **CORS** | 2.8.x | Cross-origin resource sharing |
| **dotenv** | 16.3.x | Environment variable management |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.x | UI library |
| **React Router** | 6.x | Client-side routing |
| **Axios** | 1.x | HTTP client |
| **CSS3** | - | Modern styling |

### Development Tools
- **Nodemon** - Auto-restart server on changes
- **Prisma Studio** - Visual database management
- **Postman** - API testing

---

## 🏗️ System Architecture
```
┌─────────────────────────────────────────────────┐
│              React Frontend                     │
│         (http://localhost:3000)                 │
│                                                 │
│  • Login/Register Pages                         │
│  • User Dashboard (Protected)                   │
│  • Admin Dashboard (Protected)                  │
│  • Protected Route Guards                       │
└─────────────────┬───────────────────────────────┘
                  │
                  │ HTTP Requests (Axios)
                  │ Authorization: Bearer <JWT>
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│           Express.js API Server                 │
│         (http://localhost:5000)                 │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  Middleware Layer                        │  │
│  │  • CORS Handler                          │  │
│  │  • JSON Body Parser                      │  │
│  │  • JWT Verification (authMiddleware)     │  │
│  │  • Role Check (roleMiddleware)           │  │
│  │  • Global Error Handler                  │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  Routes Layer                            │  │
│  │  • /api/v1/auth (Public)                 │  │
│  │  • /api/v1/tasks (Protected)             │  │
│  │  • /api/v1/users (Admin Only)            │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  Controllers Layer                       │  │
│  │  • Business Logic                        │  │
│  │  • Request Validation                    │  │
│  │  • Response Formatting                   │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  Prisma ORM                              │  │
│  │  • Type-safe database queries            │  │
│  │  • Automatic migrations                  │  │
│  │  • Connection pooling                    │  │
│  └──────────────────────────────────────────┘  │
└─────────────────┬───────────────────────────────┘
                  │
                  │ SQL Queries
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│         PostgreSQL Database                     │
│                                                 │
│  ┌─────────────┐      ┌─────────────┐          │
│  │   Users     │      │   Tasks     │          │
│  ├─────────────┤      ├─────────────┤          │
│  │ id (PK)     │◄─────┤ userId (FK) │          │
│  │ email       │      │ id (PK)     │          │
│  │ name        │      │ title       │          │
│  │ password    │      │ description │          │
│  │ role        │      │ status      │          │
│  │ createdAt   │      │ createdAt   │          │
│  └─────────────┘      └─────────────┘          │
│                                                 │
│  Relationships:                                 │
│  • One User has Many Tasks                      │
│  • Cascade Delete (delete user → delete tasks) │
└─────────────────────────────────────────────────┘
```

### Data Flow Example: Creating a Task
```
1. User clicks "Create Task" in React frontend
   ↓
2. Frontend sends POST request with JWT token
   POST /api/v1/tasks
   Headers: { Authorization: Bearer <token> }
   Body: { title, description, status }
   ↓
3. Express receives request → CORS middleware
   ↓
4. authMiddleware verifies JWT token
   ↓
5. Request reaches taskController
   ↓
6. Validation checks (express-validator)
   ↓
7. Prisma creates task in database
   ↓
8. Success response sent back to frontend
   ↓
9. Frontend updates UI + shows success toast
```

---

## 📦 Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

### Step-by-Step Installation

#### 1. Clone or Download the Repository
```bash
# Option A: Clone with Git
git clone https://github.com/Abinayateja/task-manager-fullstack.git
cd task-manager-fullstack
# Option B: Download ZIP and extract
# Then navigate to the folder
cd task-manager-fullstack
```

#### 2. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Install all dependencies
npm install

# This installs:
# - express (web framework)
# - prisma & @prisma/client (database ORM)
# - bcryptjs (password hashing)
# - jsonwebtoken (JWT tokens)
# - express-validator (input validation)
# - cors (cross-origin requests)
# - dotenv (environment variables)
# - nodemon (auto-restart server)
```

#### 3. Database Setup
```bash
# Create PostgreSQL database (run in PostgreSQL)
# Open your PostgreSQL client and run:
CREATE DATABASE taskdb;

# Generate Prisma Client
npx prisma generate

# Run database migrations (creates tables)
npx prisma migrate dev --name init

# This creates:
# - Users table (id, email, name, password, role, timestamps)
# - Tasks table (id, title, description, status, userId, timestamps)
```

#### 4. Frontend Setup
```bash
# Open a new terminal
# Navigate to frontend folder
cd frontend

# Install all dependencies
npm install

# This installs:
# - react & react-dom (UI library)
# - react-router-dom (routing)
# - axios (HTTP client)
```

---

## 🔐 Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `/backend` folder:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Connection
# Format: postgresql://username:password@host:port/database?schema=public
DATABASE_URL="postgresql://eff009013789b5abdd4ab4f2c34dddf1fbc1406c5d2bbbddc99a5fa835aee4b3:sk_pPPFJLvZJ7zkVBKRXvf6G@db.prisma.io:5432/postgres?sslmode=require"

# JWT Configuration
# IMPORTANT: Use a strong, random secret key in production
JWT_SECRET=my_super_secret_jwt_key_change_this_in_production_min_32_chars
JWT_EXPIRES_IN=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

**Important Notes:**
- Replace `your_password` with your PostgreSQL password
- Generate a strong `JWT_SECRET` for production (32+ characters)
- Never commit `.env` file to Git

**Example for Cloud SQL (if using):**
```env
DATABASE_URL="postgresql://admin:mypassword@35.200.123.45:5432/taskdb?schema=public"
```

### Frontend Environment Variables

Create a `.env` file in the `/frontend` folder:
```env
# Backend API URL
REACT_APP_API_URL=http://localhost:5000/api/v1
```

---

## ▶️ Running the Application

### Method 1: Run in Separate Terminals (Recommended)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server is running on port 5000
📝 Environment: development
🌐 CORS enabled for: http://localhost:3000
✅ Database connected successfully
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

Browser will automatically open at: `http://localhost:3000`

### Method 2: Using Prisma Studio (Optional)

To view and manage your database visually:
```bash
cd backend
npx prisma studio
```

Opens at: `http://localhost:5555`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Response Format

All API responses follow this consistent format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ /* validation errors if any */ ]
}
```

### HTTP Status Codes
- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

---

## 🔑 Authentication Endpoints

### 1. Register User
**POST** `/api/v1/auth/register`

**Description:** Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "USER"
}
```

**Validation Rules:**
- `name`: 2-50 characters
- `email`: Valid email format
- `password`: Minimum 6 characters, must contain at least 1 number
- `role`: "USER" or "ADMIN" (optional, defaults to "USER")

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createdAt": "2025-01-01T10:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User already exists with this email"
}
```

---

### 2. Login
**POST** `/api/v1/auth/login`

**Description:** Authenticate user and receive JWT token

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**Usage:**
- Store the token in localStorage
- Include token in all subsequent requests

---

### 3. Get Current User
**GET** `/api/v1/auth/me`

**Description:** Get currently logged-in user details

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER"
    }
  }
}
```

---

## 📝 Task Endpoints (Protected)

All task endpoints require authentication (JWT token in header).

### 1. Create Task
**POST** `/api/v1/tasks`

**Headers:**
```
Authorization: Bearer <your_token>
```

**Request Body:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "PENDING"
}
```

**Validation Rules:**
- `title`: 3-100 characters (required)
- `description`: Max 500 characters (optional)
- `status`: "PENDING", "IN_PROGRESS", or "COMPLETED" (optional, defaults to "PENDING")

**Success Response (201):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": {
      "id": 1,
      "title": "Complete project documentation",
      "description": "Write comprehensive README and API docs",
      "status": "PENDING",
      "userId": 1,
      "createdAt": "2025-01-01T10:00:00.000Z",
      "updatedAt": "2025-01-01T10:00:00.000Z"
    }
  }
}
```

---

### 2. Get All User Tasks
**GET** `/api/v1/tasks?page=1&limit=10&status=PENDING`

**Description:** Get all tasks for the logged-in user with optional filtering and pagination

**Headers:**
```
Authorization: Bearer <your_token>
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `status`: Filter by status (optional)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": 1,
        "title": "Complete project documentation",
        "description": "Write comprehensive README and API docs",
        "status": "PENDING",
        "createdAt": "2025-01-01T10:00:00.000Z",
        "updatedAt": "2025-01-01T10:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalTasks": 1,
      "limit": 10
    }
  }
}
```

---

### 3. Get Task by ID
**GET** `/api/v1/tasks/:id`

**Description:** Get details of a specific task (must be owner or admin)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "task": {
      "id": 1,
      "title": "Complete project documentation",
      "description": "Write comprehensive README and API docs",
      "status": "PENDING",
      "userId": 1,
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      "createdAt": "2025-01-01T10:00:00.000Z"
    }
  }
}
```

---

### 4. Update Task
**PUT** `/api/v1/tasks/:id`

**Description:** Update task details (must be owner)

**Request Body (all fields optional):**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "IN_PROGRESS"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "task": {
      "id": 1,
      "title": "Updated title",
      "status": "IN_PROGRESS",
      "updatedAt": "2025-01-01T11:00:00.000Z"
    }
  }
}
```

---

### 5. Delete Task
**DELETE** `/api/v1/tasks/:id`

**Description:** Delete a task (must be owner)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

**Error Response (403):**
```json
{
  "success": false,
  "message": "Not authorized to delete this task"
}
```

---

## 👥 Admin Endpoints (Admin Only)

### 1. Get All Users
**GET** `/api/v1/users?page=1&limit=10`

**Description:** Get list of all users with pagination (admin only)

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "USER",
        "createdAt": "2025-01-01T10:00:00.000Z",
        "_count": {
          "tasks": 5
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 1,
      "totalUsers": 1,
      "limit": 10
    }
  }
}
```

---

### 2. Get User by ID
**GET** `/api/v1/users/:id`

**Description:** Get specific user details with all their tasks (admin only)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "USER",
      "createdAt": "2025-01-01T10:00:00.000Z",
      "tasks": [
        {
          "id": 1,
          "title": "Complete documentation",
          "description": "Write README",
          "status": "COMPLETED",
          "createdAt": "2025-01-01T10:00:00.000Z"
        }
      ]
    }
  }
}
```

---

### 3. Delete User
**DELETE** `/api/v1/users/:id`

**Description:** Delete a user and all their tasks (admin only, cannot delete self)

**Success Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "You cannot delete your own account"
}
```

---

## 📁 Project Structure
```
task-management-system/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js              # Prisma client initialization
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js        # Registration, login, getMe
│   │   │   ├── taskController.js        # Task CRUD operations
│   │   │   └── userController.js        # Admin user management
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js        # JWT token verification
│   │   │   ├── roleMiddleware.js        # Admin role checking
│   │   │   └── errorHandler.js          # Global error handling
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js            # /auth/register, /auth/login
│   │   │   ├── taskRoutes.js            # /tasks/* endpoints
│   │   │   └── userRoutes.js            # /users/* endpoints (admin)
│   │   │
│   │   ├── utils/
│   │   │   └── validation.js            # express-validator rules
│   │   │
│   │   └── index.js                     # Express app entry point
│   │
│   ├── prisma/
│   │   ├── schema.prisma                # Database schema definition
│   │   └── migrations/                  # Database migration history
│   │
│   ├── .env                             # Environment variables (not in git)
│   ├── .env.example                     # Example env file
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js                # Navigation bar component
│   │   │   ├── TaskCard.js              # Individual task card
│   │   │   ├── TaskForm.js              # Create/edit task form
│   │   │   └── UserTable.js             # Admin user table
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.js                 # Login page
│   │   │   ├── Register.js              # Registration page
│   │   │   ├── Dashboard.js             # User task dashboard
│   │   │   └── AdminDashboard.js        # Admin panel
│   │   │
│   │   ├── services/
│   │   │   └── api.js                   # Axios HTTP client setup
│   │   │
│   │   ├── utils/
│   │   │   ├── ProtectedRoute.js        # Route guard component
│   │   │   └── toast.js                 # Toast notification helper
│   │   │
│   │   ├── App.js                       # Main app with routing
│   │   ├── App.css                      # Global styles
│   │   └── index.js                     # React entry point
│   │
│   ├── .env                             # Environment variables (not in git)
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── postman_collection.json          # API testing collection
│   └── SCALABILITY.md                   # Future scalability notes
│
└── README.md                            # This file
```

---

## 🔒 Security Implementation

### 1. Password Security
```javascript
// Passwords are hashed before storing
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash(password, 10);

// Never stored in plain text
// Never included in API responses
// Never in JWT token payload
```

**Implementation:**
- 10 salt rounds (good balance of security and performance)
- Passwords never exposed in API responses
- Minimum 6 characters, must contain a number

---

### 2. JWT Authentication
```javascript
// Token generation
const jwt = require('jsonwebtoken');
const token = jwt.sign(
  { id: userId },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// Token verification
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

**Security Features:**
- Stateless authentication (no server-side sessions)
- Token expiration (7 days)
- Secure secret key in environment variables
- Token verified on every protected route

---

### 3. Role-Based Authorization
```javascript
// Admin-only middleware
if (req.user.role !== 'ADMIN') {
  return res.status(403).json({
    message: 'Access denied. Admin privileges required.'
  });
}
```

**Access Control:**
- Users can only access their own tasks
- Admins can view all users and tasks
- Middleware prevents unauthorized access

---

### 4. Input Validation
```javascript
// Using express-validator
body('email').isEmail().normalizeEmail(),
body('password').isLength({ min: 6 }).matches(/\d/)
```

**Validation Rules:**
- Email format checking
- Password strength requirements
- String length limits
- Status enum validation

---

### 5. Database Security
```javascript
// Prisma ORM prevents SQL injection
const user = await prisma.user.findUnique({
  where: { email }
});
```

**Features:**
- Parameterized queries (SQL injection prevention)
- Type-safe database operations
- Cascade delete on relationships

---

### 6. CORS Configuration
```javascript
// Only allow requests from frontend
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true
};
```

**Protection:**
- Whitelist specific origins
- Block unauthorized domains

---

## 📈 Future Scalability Considerations

While this application is built for immediate functionality, here are scalability improvements that could be implemented as the user base grows:

### Phase 1: Performance Optimization (1K+ users)
- **Redis Caching**: Cache frequently accessed data (user profiles, task lists) to reduce database queries by 60-70%
- **Database Indexing**: Add indexes on `email`, `status`, and foreign keys for faster queries
- **API Rate Limiting**: Prevent abuse with request limits per IP/user

### Phase 2: Horizontal Scaling (10K+ users)
- **Load Balancing**: Use Nginx to distribute traffic across multiple Node.js servers
- **Database Read Replicas**: Separate read and write operations for better performance
- **CDN Integration**: Serve static assets globally with Cloudflare/AWS CloudFront

### Phase 3: Microservices Architecture (100K+ users)
- **Service Decomposition**: Split into Auth, User, Task, and Notification services
- **Message Queue**: Use RabbitMQ/Kafka for asynchronous communication
- **Container Orchestration**: Deploy with Docker and Kubernetes for auto-scaling

### Monitoring & Observability
- Application metrics (response times, error rates)
- Infrastructure monitoring (CPU, memory, disk usage)
- Logging aggregation (ELK stack)
- Distributed tracing (Jaeger)

**Full Details:** See `/docs/SCALABILITY.md`

---

## 📸 Screenshots (Live Application)

### 🔐 Login Page
![Login Screen](./screenshots/login.png.png)

### 📝 Register User
![Register Screen](./screenshots/register.png.png)

### 📊 User Dashboard
![Dashboard](./screenshots/dashboard.png.png)

### ➕ Create Task (Modal)
![Create Task](./screenshots/create-task.png.png)

### 👑 Admin Dashboard (Admin Only)
![Admin Panel](./screenshots/admin-dashboard.png.png)


## 🎥 Video Demo
🔗 https://task-manager-fullstack-1-pjxi.onrender.com


Demo includes:

User registration and login
Creating, editing, and deleting tasks
Task status management
Admin dashboard functionality
API testing with Postman
🧪 Testing
Test with Postman
Import /docs/postman_collection.json into Postman
Set {{baseUrl}} variable to http://localhost:5000/api/v1
Run the collection to test all endpoints
Manual Testing Checklist
 Register a new user
 Login with valid credentials
 Login with invalid credentials (should fail)
 Create a task
 View all tasks
 Update task status
 Delete a task
 Register admin user
 Access admin dashboard
 View user details
 Delete a user
 Try accessing admin routes as regular user (should fail)
🚀 Deployment Ready
This application is ready for deployment to:

Backend: Heroku, Railway, Render, AWS EC2
Frontend: Vercel, Netlify, AWS S3 + CloudFront
Database: AWS RDS, Google Cloud SQL, Heroku Postgres
Note: Currently configured for local development. For production deployment, update environment variables and ensure secure secrets.

📝 Development Notes
What I Learned
Building secure authentication systems with JWT
Role-based access control implementation
RESTful API design principles
Database relationships with Prisma
React state management and routing
Error handling and validation best practices
Challenges Faced
Properly implementing JWT middleware
Managing database relationships with Prisma
Handling CORS between frontend and backend
Creating a clean, intuitive UI
Time Breakdown
Day 1 (8 hours): Backend API, database schema, authentication
Day 2 (6 hours): Frontend UI, integration, testing, documentation

📧 Contact
Gaddam Abinayateja
📧 Email: gaddamabinayateja@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/abinaya-teja-gaddam/
💻 GitHub: https://github.com/Abinayateja

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Developed as part of Backend Developer Internship Assignment
Company: Primetrade.ai
Assignment Duration: 3 days (Completed in 2 days)
Special thanks to the Node.js, React, and Prisma communities
<div align="center">
Built with ❤️ by Abinayateja Gaddam

</div> ```