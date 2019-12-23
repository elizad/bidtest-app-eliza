import mongoose from "mongoose";
import Buyers from "../models/buyers";
import Bids from "../models/bids";
import Sellers from "../models/sellers";
import Competition from "../models/competition";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017");
};

const models = { Buyers, Bids, Sellers, Competition };

export { connectDb };
export default models;
