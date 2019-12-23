import mongoose from "mongoose";

const Schema = mongoose.Schema;

const buyers = new Schema({
  id: String,
  name: String,
  verified: Boolean
});

const Buyers = mongoose.model("Buyers", buyers);

export default Buyers;
