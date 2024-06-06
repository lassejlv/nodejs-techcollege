import { supabase } from "@/util/supabase";
import type { Song } from "@/util/zod";

export class SongModel {
  static async all(limit?: number) {
    // we will to return artist name out from the artist id
    const { data, error } = await supabase
      .from("Songs")
      .select("id,title,content,artist:artist_id ( id, name )")
      .limit(limit ?? 500);

    if (error) throw new Error(error.message);
    else return data;
  }

  static async single(id: string) {
    const { data, error } = await supabase
      .from("Songs")
      .select("id,title,content,artist:artist_id ( id, name )")
      .eq("id", id)
      .single();
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

  static async update(id: string, song: Song) {
    const { data, error } = await supabase
      .from("Songs")
      .update({
        title: song.title,
        content: song.content,
        artist_id: song.artist_id,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  }
}
