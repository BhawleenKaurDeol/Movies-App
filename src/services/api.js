import axios from 'axios';
import { TMDB_API_KEY } from '@env';

const API_KEY = TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
   try {
     const response = await axios.get(`${BASE_URL}${endpoint}`, {
       params: {
         api_key: API_KEY,
       },
     });
     return response.data;
   } catch (error) {
     console.error("Error fetching data:", error);
     return null;
   }
};
