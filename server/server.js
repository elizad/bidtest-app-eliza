import express from "express";
import bodyParser from "body-parser";
import { seed } from "./db/fakeDataInit";
import buyers from "./routes/buyers";
import bids from "./routes/bids";
import sellers from "./routes/sellers";
import competition from "./routes/competition";

import { models, connectDb } from "./db/mongo";

const port = 7000;

const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", buyers);
app.use("/api", bids);
app.use("/api", sellers);
app.use("/api", competition);

app.listen(port, () => {
  connectDb();
  seed();
  console.log("We are live on " + port);
});
