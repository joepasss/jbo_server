import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "dist")));

app.get("*.map", (_, res) => {
  res.status(204).send();
});

app.get("*.js.map", (_, res) => {
  res.status(204).send();
});

app.get("/favicon.ico", (_, res) => {
  res.status(204).send();
});

app.get("/", (_, res) => {
  res.sendFile(join(__dirname, "dist/index.html"));
});

server.listen(3000, () => {
  console.log("server running at localhost:3000");
});
