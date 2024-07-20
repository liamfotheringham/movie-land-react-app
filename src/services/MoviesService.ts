import axios from "axios";
import { SearchResponse, searchResponseSchema } from "../contracts/MovieContract";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

async function fetchTitlesRequestBuilder(url: string): Promise<SearchResponse> {
  const { data } = await axios.get(url);

  const parsed = searchResponseSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Failed to parse search response");
  }

  return parsed.data;
}

export async function fetchMovies(title: string): Promise<SearchResponse> {
  return fetchTitlesRequestBuilder(`${API_URL}&type=movie&s=${title}`);
}

export async function fetchSeries(title: string): Promise<SearchResponse> {
  return fetchTitlesRequestBuilder(`${API_URL}&type=series&s=${title}`);
}
