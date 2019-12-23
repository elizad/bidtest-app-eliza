import mongoose from "mongoose";
import Buyers from "../models/buyers";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017");
};

const models = { Buyers };

export { connectDb };
export default models;
