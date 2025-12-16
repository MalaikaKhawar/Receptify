# Backend - Authentication API

This repository contains a robust authentication backend (MERN stack style) built with Express and MongoDB.

Quick start

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:

```cmd
cd backend
npm install
```

3. Start in development:

```cmd
npm run dev
```

API endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh
- POST /api/auth/logout
- GET /api/auth/me

Notes

- Refresh tokens are stored on the user document and issued as httpOnly cookies.
