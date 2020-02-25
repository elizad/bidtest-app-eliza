const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
import Buyers from "../models/buyers";

router.get("/buyers", async (req, res) => {
  try {
    const buyers = await Buyers.find().limit(100);;
    res.send(buyers);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
