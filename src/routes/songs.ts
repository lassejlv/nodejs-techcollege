import { Failure } from "@/helpers/messages";
import { SongModel } from "@/models/song.model";
import { SongSchema } from "@/util/zod";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const songs = await SongModel.all();

    res.send(songs);
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.post("/", validateRequestBody(SongSchema), async (req, res) => {
  try {
    const data = await SongModel.create(req.body);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.put("/:songId", validateRequestBody(SongSchema), async (req, res) => {
  try {
    const id = req.params.songId;
    const data = await SongModel.update(id, req.body);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.get("/:songId", async (req, res) => {
  try {
    const id = req.params.songId;
    const data = await SongModel.single(id);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.delete("/:songId", async (req, res) => {
  try {
    const id = req.params.songId;
    const data = await SongModel.delete(id);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

export default router;
