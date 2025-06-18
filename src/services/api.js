import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https/localhost:8000", // poner la ip despues del servidor de digital en el archivo .env
});

export default api;
