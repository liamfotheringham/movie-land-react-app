import axios from "axios";
import { searchResponse, searchResponseSchema } from "../contracts/MovieContract";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

export async function fetchMovies(title: string): Promise<searchResponse> {
  const { data } = await axios.get<searchResponse>(`${API_URL}&type=movie&s=${title}`);

  const parsed = searchResponseSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Failed to parse search response");
  }

  return parsed.data;
}

export async function fetchSeries(title: string) {
  const { data } = await axios.get(`${API_URL}&type=series&s=${title}`);

  const parsed = searchResponseSchema.safeParse(data);

  if(!parsed.success){
    throw new Error("failed to parse search response");
  }

  return parsed.data;
}
