import { z } from "zod";

export const SongSchema = z.object({
  title: z.string(),
  content: z.string(),
  artist_id: z.string(),
});
