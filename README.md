# 📈 Market Navigator AI

Market Navigator AI is a comprehensive, AI-powered stock market intelligence platform that provides real-time insights, sentiment analysis, and interactive market assistance. Built with a modern tech stack and powered by Google's Gemini AI, it helps traders and investors make data-driven decisions.

## ✨ Key Features

- **📊 Comprehensive Dashboard**: Real-time market overview with advanced charting using Lightweight Charts and Recharts.
- **🤖 AI Market Assistant**: Interactive chat interface with customizable AI personalities (Bullish, Bearish, Balanced) to discuss market trends and stock specifics.
- **📰 Smart News Feed**: Aggregated financial news with AI-powered sentiment analysis to gauge market mood.
- **🔮 Market Forecasts**: AI-driven predictions and technical analysis for various stocks and indices.
- **🔔 Advanced Alerts**: Custom price and news alerts delivered via Email, WhatsApp, or Browser Push Notifications.
- **🔍 Stock Explorer**: Deep dive into individual stocks with historical data, key metrics, and financial reports.
- **💼 Personalized Watchlists**: Track your favorite assets with real-time price updates and personalized notifications.
- **🎨 Dark/Light Mode**: Premium UI/UX with fluid animations and responsive design.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Lightweight Charts](https://www.tradingview.com/lightweight-charts/) & [Recharts](https://recharts.org/)
- **Authentication**: [Firebase](https://firebase.google.com/) / [Supabase](https://supabase.com/)

### Backend
- **Environment**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **AI Engine**: [Google Gemini AI (Generative-AI)](https://ai.google.dev/)
- **Financial Data**: Yahoo Finance API (via `yahoo-finance2`)
- **Notifications**: Nodemailer (Email), Twilio (WhatsApp), Web-Push (Browser)
- **Caching**: Node-cache for optimized API performance

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun
- A Google AI (Gemini) API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Stock Market AI/Stock AI"
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Configuration

#### 1. Frontend Setup
Copy the example environment file and fill in your Firebase/Supabase credentials:
```bash
cp .env.example .env
```
Key variables: `VITE_FIREBASE_API_KEY`, `VITE_API_URL` (default: `http://localhost:3001/api`)

#### 2. Backend Setup
Navigate to the backend folder, copy the example environment file, and add your Gemini API Key:
```bash
cd backend
cp .env.example .env
```
Key variable: `GEMINI_API_KEY`

### Running the Application

You can start both frontend and backend concurrently from the root directory:

```bash
npm run dev
```

- **Frontend**: http://localhost:8080
- **Backend**: http://localhost:3001

## 📁 Project Structure

```text
├── backend/              # Node.js/Express API
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # AI and Finance logic
│   │   ├── routes/       # API endpoints
│   │   └── server.ts     # Entry point
├── src/                  # React Frontend
│   ├── components/       # Reusable UI components
│   ├── pages/            # View components (Dashboard, News, etc.)
│   ├── services/         # API integration services
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
└── tailwind.config.ts    # Styling configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

---
Built with ❤️ for the trading community.
