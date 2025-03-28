📊 Average Calculator Microservice

A React-based microservice that fetches and calculates the average of numbers from multiple external APIs. This project ensures efficiency by handling API responses optimally, filtering unique values, and maintaining a rolling window of numbers.

🚀 Features

Fetches numbers from Prime, Fibonacci, Even, and Random number APIs.

Implements a rolling window for real-time average calculations.

Ensures API response handling within 500ms timeout.

Eliminates duplicate numbers for accuracy.

User-friendly UI with a modern, sleek design.

📂 Folder Structure

📦 average-calculator
├── 📂 src
│   ├── 📂 api
│   │   └── api.js        # Handles API requests
│   ├── 📂 components
│   │   ├── NumberFetcher.js  # Dropdown & Fetch button
│   │   ├── NumberList.js     # Displays fetched numbers & average
│   ├── 📂 pages
│   │   └── Home.js      # Main page layout
│   ├── 📂 styles
│   │   └── styles.css   # Modern UI styling
│   ├── App.js          # Root component
│   ├── index.js        # Entry point
├── package.json        # Dependencies & scripts
├── README.md           # Project documentation

🔧 Installation & Setup

# Clone the repository
git clone https://github.com/your-username/average-calculator.git

# Navigate to project folder
cd average-calculator

# Install dependencies
npm install

# Start the development server
npm start

🌐 API Endpoints

Category

API Endpoint

Prime

http://20.244.56.144/test/primes

Fibonacci

http://20.244.56.144/test/fibo

Random

http://20.244.56.144/test/random

Even

http://localhost:9876/numbers/e

🔑 Authentication Token

{
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTU2MTIzLCJpYXQiOjE3NDMxNTU4MjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRlMzIwMmJlLTRlMTItNGEwMS1iZTNkLTdkODEzOWI3ZmFjYiIsInN1YiI6ImRvcmFlY2hhbjkwM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJMYWtpcmVkZHkgQmFsaXJlZGR5IENvbGxlZ2UgT2YgRW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjRlMzIwMmJlLTRlMTItNGEwMS1iZTNkLTdkODEzOWI3ZmFjYiIsImNsaWVudFNlY3JldCI6IktIYVpVSEpCZ3Zqekh0bloiLCJvd25lck5hbWUiOiJUaG90YSBMYWtzaG1pIFN1c21pdGhhIiwib3duZXJFbWFpbCI6ImRvcmFlY2hhbjkwM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMjc2MUExMjYwIn0.WZL6a6SyAyXn1LhHcIrqI4Wm1uwH3x3QuyKdBNJy6BE",
    "expires_in": 1743156123
}

🛠 Usage Guide

Select a number category from the dropdown.

Click the "Fetch Numbers" button to retrieve values.

View the rolling average and stored numbers in real-time.

🎨 UI Design

Minimalistic and intuitive interface.

Responsive design for seamless experience across devices.

Smooth hover and transition effects.


