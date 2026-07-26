# Hiring Intelligence AI

An AI-powered Hiring Analytics platform that enables users to explore recruitment data using natural language. The application converts user questions into a structured Query IR using Gemini 2.5 Flash and executes analytics on local hiring datasets, ensuring accurate and explainable responses.

---

## Features

### Authentication
- User Signup
- User Login
- Secure password hashing using bcrypt
- Session management with NextAuth
- Prisma ORM with SQLite

### Role-Based Access Control (RBAC)
- **ADMIN** – Full access to all hiring data
- **HR** – Full access to hiring analytics
- **RECRUITER** – Access restricted to their assigned jobs

### AI Analytics
- Natural language query interface
- Gemini 2.5 Flash integration
- Prompt engineering for structured output
- Query IR generation
- Zod validation before execution
- Deterministic analytics engine

### Dashboard
- Dynamic hiring metrics
- Total Jobs
- Open Jobs
- AI Jobs
- Departments
- Role-aware dashboard

### Analytics Engine
- CSV dataset loader
- Filtering
- Aggregation
- Grouping
- Sorting
- Summary generation

### Evaluation
- Automated evaluation script
- Predefined benchmark questions
- Accuracy testing

---

# Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons

## Backend

- Next.js API Routes
- Prisma ORM
- SQLite
- NextAuth v5

## AI

- Google Gemini 2.5 Flash

## Validation

- Zod

---

# Project Structure

```
app/
│
├── api/
│   ├── signup/
│   ├── chat/
│   └── dashboard/
│
├── login/
├── signup/
└── workspace/
    ├── dashboard/
    └── analytics/

lib/
│
├── analytics/
├── auth/
├── data/
├── executor/
├── llm/
├── prompts/
├── query-ir/
└── services/

prisma/
public/
scripts/
```

---

# Architecture

```
                User
                  │
                  ▼
          NextAuth Login
                  │
                  ▼
            User Session
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
 Dashboard API         Analytics API
        │                   │
        ▼                   ▼
   Role Validation      Gemini 2.5 Flash
        │                   │
        ▼                   ▼
 applyRoleScope()      Query IR
        │                   │
        ▼                   ▼
 Dashboard Metrics     Zod Validation
                            │
                            ▼
                       Analytics Engine
                            │
                            ▼
                     CSV Data Execution
                            │
                            ▼
                     Final Response
```

---

# AI Query Pipeline

```
Natural Language Question
            │
            ▼
Gemini 2.5 Flash
            │
            ▼
Query IR

{
  entity,
  metric,
  filters,
  groupBy,
  sortBy,
  sortOrder
}

            │
            ▼
Zod Validation
            │
            ▼
Analytics Executor
            │
            ▼
CSV Dataset
            │
            ▼
Response Builder
            │
            ▼
Dashboard / Chat
```

---

# Sample Queries

```
Count all jobs

Count AI jobs

Count open jobs

List Engineering jobs

Jobs by department

Group jobs by recruiter

Group jobs by location

List Finance jobs

List Sales jobs

List Product jobs
```

---

# Datasets

The project currently uses CSV datasets.

```
jobs.csv
hires.csv
headcount.csv
bands.csv
jobFamilies.csv
```

---

# Security

- Password hashing using bcrypt
- Protected API routes
- Session-based authentication
- Role-Based Access Control
- Query validation using Zod

---

# Installation

Clone the repository

```bash
git clone https://github.com/gampa-anupama/hiring-intelligence-ai.git
```

Install dependencies

```bash
npm install
```

Create `.env.local`

```env
DATABASE_URL="file:./dev.db"

AUTH_SECRET=your-secret

GEMINI_API_KEY=your-gemini-api-key
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma db push
```

Start the application

```bash
npm run dev
```

---

# Evaluation

Run the evaluation suite

```bash
npm run eval
```

The evaluation tests common hiring analytics queries and validates the generated responses.

---

# Future Improvements

- PostgreSQL support
- Recruiter mapping table
- CSV upload
- Charts and visual analytics
- Conversation history
- Saved reports
- Export to PDF and Excel
- Vector search
- RAG integration
- Multi-tenant workspaces

---

# Author

**Anupama G**

Built as an AI-powered Hiring Analytics platform demonstrating authentication, role-based access control, natural language analytics, structured query generation, and deterministic analytics execution.