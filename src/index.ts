import express from "express";
import morgan from "morgan";
import SongsRouter from "@/routes/songs";
import ArtistsRouter from "@/routes/artists";
import AlbumsRouter from "@/routes/albums";
import { env } from "@/util/env";
import cors from "cors";

const PORT = env.PORT;

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/songs", SongsRouter);

app.use("/artists", ArtistsRouter);

app.use("/albums", AlbumsRouter);

app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
