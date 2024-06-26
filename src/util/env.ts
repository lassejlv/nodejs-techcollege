import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    PORT: z.string(),
    SUPABASE_DOMAIN: z.string(),
    SUPABASE_KEY: z.string(),
    SUPABASE_PROJECT_ID: z.string(),
  },
  runtimeEnv: process.env,
});
