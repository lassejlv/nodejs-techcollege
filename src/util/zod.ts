import { z } from "zod";

export const SongSchema = z.object({
  title: z.string(),
  content: z.string(),
  artist_id: z.string(),
});

export const AlbumSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  release_date: z.string(),
  artist_id: z.string(),
});

export type Album = z.infer<typeof AlbumSchema>;
export type Song = z.infer<typeof SongSchema>;
