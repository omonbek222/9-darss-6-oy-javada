import axios from "axios";

// API uchun axios instance yaratamiz
const apiBooks = axios.create({
  baseURL: "https://api.example.com", // API URL ni bu yerga qo'yamiz (masalan, https://api.example.com)
});

export default apiBooks;
