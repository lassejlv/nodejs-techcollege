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
  res.send("My express app is running!");
});

app.get("/songs", async (req, res) => {
  const songs = await supabase
    .from("Songs")
    .select("title, id")
    .eq("id", "d7423a73-b0e9-4277-8235-bc272547db75")
    .single();

  res.send(songs);
});
app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
