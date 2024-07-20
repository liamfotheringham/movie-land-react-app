import { z } from "zod";

const titleTypeEnum = z.enum(["movie", "series"])
export type TitleTypeOptions = z.infer<typeof titleTypeEnum>;

export const titleSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: titleTypeEnum,
  Poster: z.string().url()
});

export type Title = z.infer<typeof titleSchema>

export const searchResponseSchema = z.object({
  Search: titleSchema.array(),
  totalResults: z.string(),
  Response: z.string(),
});

export type SearchResponse = z.infer<typeof searchResponseSchema>