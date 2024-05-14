import { createClient } from "@supabase/supabase-js";
import { env } from "./env";
import type { Database } from "@/types/database";

export const supabase = createClient<Database>(
  env.SUPABASE_DOMAIN,
  env.SUPABASE_KEY
);
