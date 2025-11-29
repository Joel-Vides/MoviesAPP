import axios from "axios";

//conexion a la api de movie
export const moviesApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_API_URL,

params:{
    languaje: 'es-ES',
    api_key: process.env.EXPO_PUBLIC_MOVIE_API_KEY
  }
});