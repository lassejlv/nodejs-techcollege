import express from "express";
import morgan from "morgan";
import { env } from "./env";

const PORT = env.PORT;

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("My express app is running!");
});

app.get("/another-route", (req, res) => {
  res.send("Another route!");
});

app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
