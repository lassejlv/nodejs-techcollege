import "dotenv/config";
import * as http from "http";
import { PrettyResponse, Router } from "./Router";

const PORT = process.env.PORT || 4000;

// prettier-ignore
http.createServer((req, res) => {
  const router = Router(req, res);

  router.get("/", (req, res) => {
    PrettyResponse(res).json({ message: "Yes, it does!" });
  })


}).listen(PORT, () => {
  console.log(`Started server on http://localhost:${PORT}`);
  
})
