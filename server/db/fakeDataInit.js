import Buyers from "../models/buyers";
import fs from "fs";

const databuyers = fs.readFileSync("../data/buyers.json", "utf8");
const wordsbuyers = JSON.parse(databuyers);

export const seed = async () => {
  try {
    //   await Buyers.collection.drop()
    await Buyers.insertMany(wordsbuyers);
    const buyers = await Buyers.find();
    // console.log(buyers);
  } catch (error) {
    console.log(error);
  }
};
