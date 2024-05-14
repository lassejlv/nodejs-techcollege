import express from "express";
import morgan from "morgan";
import { env } from "@/util/env";
import SongsRouter from "@/routes/songs";
import ArtistsRouter from "@/routes/artists";
import AlbumsRouter from "@/routes/albums";

const PORT = env.PORT;

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  // Get all the available routes
  const routes = app._router.stack as { route: { path: string; methods: Record<string, boolean> } }[];

  res.send(
    routes
      .filter((route) => route.route)
      .map((route) => {
        return {
          path: route.route?.path,
          methods: route.route?.methods,
        };
      })
  );
});

app.use("/songs", SongsRouter);

app.use("/artists", ArtistsRouter);

app.use("/albums", AlbumsRouter);

app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
