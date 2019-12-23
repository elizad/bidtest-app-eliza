const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
import Sellers from "../models/sellers.js";

router.get("/sellers", async (req, res) => {
  try {
    const sellers = await Sellers.find();
    res.send(sellers);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
