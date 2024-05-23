import { supabase } from "@/util/supabase";
import type { Album } from "@/util/zod";

export class AlbumModels {
  static async all(limit?: number) {
    const { data, error } = await supabase
      .from("Albums")
      .select("id,title,release_date,artist_id:artist_id ( id, name )")
      .limit(limit ?? 500);

    if (error) throw new Error(error.message);
    else return data;
  }

  static async single(id: string) {
    const { data, error } = await supabase.from("Albums").select().eq("id", id).single();
    if (error) throw new Error(error.message);
    else return data;
  }

  static async create(album: Album) {
    const { data, error } = await supabase
      .from("Albums")
      .insert({
        title: album.title,
        description: album.description,
        image: album.image,
        release_date: album.release_date,
        artist_id: album.artist_id,
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    else return data;
  }

  static async delete(id: string) {
    const { data, error } = await supabase.from("Albums").delete().eq("id", id).select().single();

    if (error) throw new Error(error.message);

    return data;
  }

  static async update(id: string, album: Album) {
    const { data, error } = await supabase
      .from("Albums")
      .update({
        title: album.title,
        description: album.description,
        image: album.image,
        release_date: album.release_date,
        artist_id: album.artist_id,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  }

  static async getAlbumSongs(album_id: string) {
    const { data, error } = await supabase
      .from("Songs")
      .select("id,title,content,album_id:album_id ( id, title )")
      .eq("album_id", album_id);

    if (error) throw new Error(error.message);
    else return data;
  }
}
