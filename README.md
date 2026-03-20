# React Debounced Search App

A React application that implements a debounced search using a custom hook and integrates with an external API.

This project demonstrates core frontend concepts like debouncing user input, API integration, handling asynchronous operations, and managing race conditions using AbortController.

---

## 🚀 Features

- Debounced search input (500ms delay)
- API integration (GitHub Users API)
- Custom React hook (`useDebounce`)
- Loading state handling
- No results state handling
- Request cancellation using AbortController (prevents race conditions)

---

## 🛠️ Tech Stack

- React (Hooks)
- JavaScript (ES6+)
- Fetch API
- Vite

---

## 🧠 Key Concepts Covered

- Debouncing user input to optimize performance
- Custom hooks for reusable logic
- Handling async API calls with `async/await`
- Preventing race conditions using `AbortController`
- Conditional rendering in React

---

## 📸 How It Works

1. User types in the search box  
2. Input is debounced using a custom hook  
3. API call is triggered only after user stops typing  
4. Previous API requests are cancelled if a new search starts  
5. Results are displayed dynamically  

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev

# React Debounced Search App

A React application that implements a debounced search using a custom hook and integrates with an external API.

This project demonstrates core frontend concepts like debouncing user input, API integration, handling asynchronous operations, and managing race conditions using AbortController.

---

## 🚀 Features

- Debounced search input (500ms delay)
- API integration (GitHub Users API)
- Custom React hook (`useDebounce`)
- Loading state handling
- No results state handling
- Request cancellation using AbortController (prevents race conditions)

---

## 🛠️ Tech Stack

- React (Hooks)
- JavaScript (ES6+)
- Fetch API
- Vite

---

## 🧠 Key Concepts Covered

- Debouncing user input to optimize performance
- Custom hooks for reusable logic
- Handling async API calls with `async/await`
- Preventing race conditions using `AbortController`
- Conditional rendering in React

---

## 📸 How It Works

1. User types in the search box  
2. Input is debounced using a custom hook  
3. API call is triggered only after user stops typing  
4. Previous API requests are cancelled if a new search starts  
5. Results are displayed dynamically  

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev

Live Demo
https://debounce-search-app.vercel.app/
