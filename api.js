import axios from "axios";

const API_ENDPOINTS = {
  prime: "http://20.244.56.144/test/primes",
  fibonacci: "http://20.244.56.144/test/fibo",
  random: "http://20.244.56.144/test/random",
  even: "http://localhost:9876/numbers/e",
};

const AUTH_HEADERS = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTU2MTIzLCJpYXQiOjE3NDMxNTU4MjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRlMzIwMmJlLTRlMTItNGEwMS1iZTNkLTdkODEzOWI3ZmFjYiIsInN1YiI6ImRvcmFlY2hhbjkwM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJMYWtpcmVkZHkgQmFsaXJlZGR5IENvbGxlZ2UgT2YgRW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjRlMzIwMmJlLTRlMTItNGEwMS1iZTNkLTdkODEzOWI3ZmFjYiIsImNsaWVudFNlY3JldCI6IktIYVpVSEpCZ3Zqekh0bloiLCJvd25lck5hbWUiOiJUaG90YSBMYWtzaG1pIFN1c21pdGhhIiwib3duZXJFbWFpbCI6ImRvcmFlY2hhbjkwM0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMjc2MUExMjYwIn0.WZL6a6SyAyXn1LhHcIrqI4Wm1uwH3x3QuyKdBNJy6BE"
  },
};

export const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(API_ENDPOINTS[type], {
      ...AUTH_HEADERS,
      timeout: 500,
    });
    return response.data.numbers || [];
  } catch (error) {
    console.error("Error fetching numbers:", error);
    return [];
  }
};
