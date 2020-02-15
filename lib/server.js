import express from "express";
import config from "./config";
import serverRender from "renderers/server.js";
import { data } from "./testData.json";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  const initialContent = serverRender();
  res.render("index", { initialContent });
});

app.listen(config.PORT, function listenHandler() {
  console.log(`Running on ${config.PORT}`);
});
