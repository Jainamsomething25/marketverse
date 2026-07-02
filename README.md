# MarketVerse: AI-Powered Financial Decision Laboratory

MarketVerse is a sandbox application that simulates a living economy. AI-generated financial news affects companies, sectors, and user portfolios via a matrix-based Ripple Engine. 

This repository contains the production-ready foundation built for **Milestone 1A**.

---

## 📂 Project Folder Structure

```
marketverse/
├── frontend/               # Next.js 15 App Router Frontend
│   ├── public/             # Static Assets
│   └── src/
│       ├── app/            # App Router Pages & Providers
│       ├── components/     # UI & Shared Layout Elements
│       ├── features/       # Feature Domain Isolation
│       │   ├── portfolio/  # Portfolio Charts & Holdings Table
│       │   ├── simulation/ # Day Tick & Active Shocks
│       │   ├── future-lab/ # Sandbox Branching & Scenarios
│       │   ├── mentor/     # AI Chat Assistant
│       │   └── fis/        # Financial Intelligence dials
│       ├── hooks/          # Custom React Hooks
│       ├── lib/            # Axios, Supabase, QueryClient configurations
│       ├── store/          # Zustand State Stores
│       ├── types/          # TypeScript interface definitions
│       └── utils/          # Tailwind class merger utilities
│
├── backend/                # FastAPI Web Gateway Backend
│   ├── app/
│   │   ├── api/            # API routing & endpoints
│   │   ├── core/           # Settings, DB sessions, JWT guards
│   │   ├── models/         # SQLAlchemy Table Entities
│   │   ├── schemas/        # Pydantic DTO payloads
│   │   ├── services/       # Simulation, Ripple, AI Mentor engines
│   │   └── tasks/          # Background worker schedulers
│   ├── requirements.txt    # Python requirements manifest
│   └── .env                # Backend local config file
│
├── .env.example            # Environment variables configuration template
└── .gitignore              # Repository file exclusion rules
```

---

## 🛠️ Tech Stack & Configurations

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict configuration)
- **Styling**: Tailwind CSS v4 (CSS variables theme declaration)
- **HTTP Client**: Axios with dynamic bearer token interception
- **State Management**: Zustand (Global UI & Scenario stores) + TanStack Query (Server Cache sync)

### Backend
- **Framework**: FastAPI (Python 3.10+)
- **WSGI / Web Server**: Uvicorn
- **ORM**: SQLAlchemy 2.0
- **JWT Provider**: Supabase Auth compatible verification filter

---

## ⚙️ Initial Startup & Verification Commands

### 1. Backend Environment Setup
From the `backend/` directory:

```bash
# Create a virtual environment
python -m venv venv

# Activate virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Windows (CMD):
.\venv\Scripts\activate.bat
# Linux / macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI Dev Server
uvicorn app.main:app --reload --port 8000
```
API docs will be live at: [http://localhost:8000/api/v1/docs](http://localhost:8000/api/v1/docs)

### 2. Frontend Development Setup
From the `frontend/` directory:

```bash
# Install NPM packages
npm install

# Start Local Next.js dev server
npm run dev
```
Web client will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Verification Log (Milestone 1A)
- **Frontend Server**: Launches without compilation or TypeScript errors.
- **Backend Server**: Launches with standard logs; `/health` returns `{"status": "healthy"}` correctly.
- **Supabase Interceptor**: Automatically appends session authorization headers.
