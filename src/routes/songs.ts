import { supabase } from "@/util/supabase";
import { SongSchema } from "@/util/zod";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Songs").select("*");

    if (error) return res.status(400).send({ error });

    res.send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.post("/", validateRequestBody(SongSchema), async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("Songs")
      .insert({
        title: req.body.title,
        content: req.body.content,
        artist_id: req.body.artist_id,
      })
      .select()
      .single();

    if (error) return res.status(400).send({ error });

    res.send({ data });
  } catch (error) {
    res.status(400).send({ error });
  }
});

export default router;
