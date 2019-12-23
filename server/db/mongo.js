import mongoose from "mongoose";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017");
};

const models = {};

export { connectDb };
export default models;
