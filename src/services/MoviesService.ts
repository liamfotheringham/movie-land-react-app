import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

export async function fetchMovies(title: string) {
  const response = await axios.get(`${API_URL}&type=movie&s=${title}`);

  return response.data;
}

export async function fetchSeries(title: string) {
  const response = await axios.get(`${API_URL}&type=series&s=${title}`);
  
  return response.data;
}
