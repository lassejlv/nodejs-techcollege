import { supabase } from "@/util/supabase";
import type { Song } from "@/util/zod";

export class SongModel {
  static async all(limit?: number) {
    const { data, error } = await supabase
      .from("Songs")
      .select("*")
      .limit(limit ?? 500);

    if (error) throw new Error(error.message);
    else return data;
  }

  static async single(id: string) {
    const { data, error } = await supabase.from("Songs").select().eq("id", id).single();
    if (error) throw new Error(error.message);
    else return data;
  }

  static async create(song: Song) {
    const { data, error } = await supabase
      .from("Songs")
      .insert({
        title: song.title,
        content: song.content,
        artist_id: song.artist_id,
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    else return data;
  }

  static async delete(id: string) {
    const { data, error } = await supabase.from("Songs").delete().eq("id", id).select().single();

    if (error) throw new Error(error.message);

    return data;
  }
}
