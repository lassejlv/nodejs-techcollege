import { supabase } from "@/util/supabase";

export class AlbumModels {
  static async all(limit?: number) {
    const { data, error } = await supabase
      .from("Albums")
      .select("id,title,release_date,artist_id:artist_id ( id, name )")
      .limit(limit ?? 500);

    if (error) throw new Error(error.message);
    else return data;
  }
}
