import mongoose from "mongoose";

const Schema = mongoose.Schema;

const competition = new Schema({
  id: String,
  buyer: String,
  name: String,
  open: String,
  closed: String,
  minimum_capacity: Number,
  currency: String
});

const Competition = mongoose.model("Competition", competition);

export default Competition;
