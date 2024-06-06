import { supabase } from "@/util/supabase";

export class ArtistsModel {
  static async all(limit?: number) {
    const { data, error } = await supabase
      .from("Artist")
      .select("id,name")
      .limit(limit ?? 500);

    if (error) throw new Error(error.message);
    else return data;
  }

  static async single(id: string) {
    const { data, error } = await supabase.from("Artist").select("id,name").eq("id", id).single();
    if (error) throw new Error(error.message);
    else return data;
  }
}
