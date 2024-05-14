import express from "express";
import morgan from "morgan";
import { env } from "./env";
import { supabase } from "./supabase";

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

app.get("/songs", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Songs").select("*");

    if (error) return res.status(400).send({ error });

    res.send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
});

app.get("/artists", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Artist").select("*");

    if (error) return res.status(400).send({ error });

    res.send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
});

app.get("/albums", async (req, res) => {
  try {
    const { data, error } = await supabase.from("Albums").select("*");

    if (error) return res.status(400).send({ error });

    res.send(data);
  } catch (error) {
    res.status(400).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
