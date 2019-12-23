import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sellers = new Schema({
  id: String,
  name: String,
  verified: Boolean
});

const Sellers = mongoose.model("Sellers", sellers);

export default Sellers;
