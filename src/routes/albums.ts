import { Failure } from "@/helpers/messages";
import { AlbumModels } from "@/models/album.model";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const songs = await AlbumModels.all();

    res.send(songs);
  } catch (error: any) {
    Failure(error.message, res);
  }
});

export default router;
