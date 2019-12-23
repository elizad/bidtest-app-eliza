const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
import Competition from "../models/competition";

router.get("/competitions", async (req, res) => {
  try {
    const competition = await Competition.find();
    res.send(competition);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
