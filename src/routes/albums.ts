import { Failure } from "@/helpers/messages";
import { AlbumModels } from "@/models/album.model";
import { AlbumSchema } from "@/util/zod";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const songs = await AlbumModels.all();

    res.send(songs);
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.get("/:albumId", async (req, res) => {
  try {
    const id = req.params.albumId;
    const data = await AlbumModels.single(id);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.post("/", validateRequestBody(AlbumSchema), async (req, res) => {
  try {
    const data = await AlbumModels.create(req.body);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.put("/:albumId", validateRequestBody(AlbumSchema), async (req, res) => {
  try {
    const id = req.params.albumId;
    const data = await AlbumModels.update(id, req.body);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

router.delete("/:albumId", async (req, res) => {
  try {
    const id = req.params.albumId;
    const data = await AlbumModels.delete(id);

    res.send({ data });
  } catch (error: any) {
    Failure(error.message, res);
  }
});

export default router;
