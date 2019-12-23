import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bids = new Schema({
  id: String,
  name: String,
  verified: Boolean,
  created: String,
  accepted: Boolean,
  competition: String,
  seller: String,
  value: Number,
  offered_capacity: Number
});

const Bids = mongoose.model("Bids", bids);

export default Bids;
