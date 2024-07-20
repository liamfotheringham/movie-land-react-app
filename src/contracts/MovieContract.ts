import { z } from "zod";

export const titleTypeEnum = z.enum(["movie", "series"])

export const titleSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: titleTypeEnum,
  Poster: z.string().url()
});

export type title = z.infer<typeof titleSchema>

export const searchResponseSchema = z.object({
  Search: titleSchema.array(),
  totalResults: z.string(),
  Response: z.string(),
});

export type searchResponse = z.infer<typeof searchResponseSchema>