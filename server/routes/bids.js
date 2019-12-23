const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
import Bids from "../models/bids";

router.get("/bids", async (req, res) => {
  try {
    const bids = await Bids.find();
    res.send(bids);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
