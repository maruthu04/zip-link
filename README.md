# ⚡ ZipLink

<div align="center">

![ZipLink Banner](https://via.placeholder.com/1200x400.png?text=ZipLink+Project+Preview)
>

**The modern, privacy-focused URL shortening infrastructure.**

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)

[View Live Demo](https://your-demo-link.vercel.app) · [Report Bug](https://github.com/yourusername/ziplink/issues) · [Request Feature](https://github.com/maruthu04/zip-link/issues)

</div>

---

## 📋 Executive Summary

**ZipLink** is a robust, full-stack URL shortening service engineered for performance and ease of use. It eliminates the friction of traditional link management tools by removing authentication barriers while maintaining enterprise-grade features like custom aliasing, and automated data hygiene.

Built on the **Next.js 15 App Router**, ZipLink leverages Server-Side Rendering (SSR) and Server Actions to ensure lightning-fast redirects and SEO optimization.

---

## 🌟 Key Features

### 🚀 Core Functionality
* **High-Performance Redirection:** Optimized routing logic ensures minimal latency during link resolution.
* **Custom Aliasing:** Users can define branded URLs (e.g., `ziplink.io/campaign-2025`) for better click-through rates.
* **Smart Validation:** Robust regex validation ensures only secure, properly formatted URLs are processed.

### 📊 Analytics & Insights
* **Public Dashboards:** Instant, token-free access to analytics for every shortened link.
* **Detailed Metrics:**  Timestamp history.

### 🛡️ Security & Maintenance
* **QR Code Generation:** Integrated, on-the-fly QR code creation for physical marketing assets.
* **Auto-Expiry (TTL):** Database optimization via MongoDB TTL indexes—links automatically expire after **7 days** to maintain hygiene and privacy.
* **Rate Limiting:** (Ready for implementation) Architecture supports middleware-based rate limiting.

---

## 🏗️ System Architecture

ZipLink employs a modern serverless architecture to ensure scalability and reliability.



* **Frontend:** Next.js (React) responsible for the UI, form handling, and data visualization.
* **API Layer:** Next.js API Routes handle business logic (validation, shortening, alias checks).
* **Database Layer:** MongoDB (Atlas) serves as the document store, managing URL mappings and click-stream data.
* **Routing:** Dynamic route segments (`[shortId]`) handle the redirection logic.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 | App Router, Server Actions, API Routes |
| **Language** | JavaScript (ES6+) | Modern syntax and async/await patterns |
| **Styling** | Tailwind CSS | Utility-first CSS for responsive design |
| **Database** | MongoDB | NoSQL document storage via **Mongoose** ODM |
| **Icons** | Lucide React | Lightweight, consistent icon set |

---

## 🚀 Installation & Setup

Follow these instructions to set up the project locally for development or testing.

### Prerequisites
* **Node.js** v18.17.0 or higher
* **npm** or **yarn**
* A running **MongoDB** instance (Local or Atlas)

### Step 1: Clone the Repository
```bash
git clone [https://github.com/maruthu04/zip-link.git](https://github.com/maruthu04/zip-link.git)
cd zip-link
Step 2: Install Dependencies
Bash

npm install
# or
yarn install
Step 3: Environment Configuration
Create a .env.local file in the project root. You must define the following variables:

Code snippet

# Database Connection (Required)
# Ensure you append the database name '/ziplink' at the end of the string
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.net/ziplink

# App Base URL (Required)
# Used for generating the full short URL in responses
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Step 4: Run Development Server
Bash

npm run dev
Access the application at http://localhost:3000.

🤝 Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.

Create a Feature Branch (git checkout -b feature/NewFeature).

Commit your changes (git commit -m 'Add NewFeature').

Push to the branch (git push origin feature/NewFeature).

Open a Pull Request.

Please ensure your code follows the existing style guidelines and includes relevant tests.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.


Project Link: https://github.com/maruthu04/zip-link