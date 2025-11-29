import axios from "axios";

// Conexión a la API de The Movie Database
export const moviesApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_API_URL,
  params: {
    language: "es-ES",
    api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  },
});
