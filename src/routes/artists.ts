import { Failure } from "@/helpers/messages";
import { ArtistsModel } from "@/models/artists.model";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const songs = await ArtistsModel.all();

    res.send(songs);
  } catch (error: any) {
    Failure(error.message, res);
  }
});

export default router;
