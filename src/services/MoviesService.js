import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

export async function fetchMovies(title) {
  return await axios.get(`${API_URL}&s=${title}`).then(res => res.data);
}