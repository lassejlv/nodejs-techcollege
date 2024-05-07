import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 5001;

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Started server on port http://localhost:${PORT}`);
});
