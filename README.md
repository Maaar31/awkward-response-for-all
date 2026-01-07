# Awkward Response For All (ARFA)

![Awkward Response For All Banner](assets/banner.png)

> *The API nobody asked for, but everyone secretly needs.*

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.6-green.svg)
![Awkwardness](https://img.shields.io/badge/awkwardness-100%25-red.svg)

## 🔴 [**TRY THE LIVE DEMO**](https://awkward-response-for-all.vercel.app/)

**Awkward Response For All** is a robust, open-source REST API designed to solve one specific problem: determining what to say when you have absolutely nothing to say. 

With over **3,600 curated responses** across four scientifically proven categories of hesitation, this project provides the ultimate backend for social discomfort.

## 🚀 Features

- **Massive Dataset**: 3,600+ unique responses.
- **Categorized Chaos**: Filter by `Yes`, `No`, `Maybe`, or `IDK`.
- **Modern Frontend**: A beautiful, glassmorphism-based web interface included.
- **Lightweight**: Built on Node.js and Express. No database required (it's all JSON, baby).
- **Open Source**: Created by **BAKENO** and open to the world.

## 📦 Installation

Get the awkwardness running locally in seconds.

```bash
# Clone the repository
git clone https://github.com/Maaar31/awkward-response-for-all.git

# Navigate to the directory
cd awkward-response-for-all

# Install dependencies
npm install

# Start the server
npm start
```

Access the web interface at: `http://localhost:3000`

## ☁️ Deployment (Free)

This project is configured for **Vercel**. You can deploy it for free in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMaaar31%2Fawkward-response-for-all)

Or manually:
1. Push your code to GitHub.
2. Sign up for [Vercel](https://vercel.com).
3. Import your project (it will auto-detect the configuration).


## 🔌 API Documentation

Integrate awkwardness directly into your applications.

### 1. Get Random Response
Returns a single random response from the entire collection.

- **Endpoint**: `GET /random`
- **Response**:
  ```json
  {
    "id": 142,
    "text": "I would, but I'm currently observing a moment of silence for my motivation.",
    "category": "no"
  }
  ```

### 2. Get Categorized Response
Returns a random response from a specific category.

- **Endpoint**: `GET /random/:category`
- **Supported Categories**: `yes`, `no`, `maybe`, `idk`
- **Example**: `GET /random/maybe`
- **Response**:
  ```json
  {
    "id": 2505,
    "text": "I’m waiting for the stars to align in a binary code.",
    "category": "maybe"
  }
  ```

## 🤝 Contributing

**We welcome contributions!** 

Have a witty comeback? An awkward silence filler? A polite way to say "I have no idea what you're talking about"?

1.  **Fork** the repository.
2.  **Create** your feature branch (`git checkout -b feature/new-responses`).
3.  **Commit** your changes (`git commit -m 'Added 50 new ways to say no'`).
4.  **Push** to the branch (`git push origin feature/new-responses`).
5.  **Open a Pull Request**.

Please ensure your submissions are:
- Funny, witty, or appropriately awkward.
- Safe for work (mostly).
- Not duplicates of existing responses.

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

**Created by BAKENO**  
*Master of Digital Discomfort*
