import Buyers from "../models/buyers";
import fs from "fs";

const databuyers = fs.readFileSync("../data/buyers.json", "utf8");
const wordsbuyers = JSON.parse(databuyers);

const dataselllers = fs.readFileSync("../data/sellers.json", "utf8");
const wordsSellers = JSON.parse(dataselllers);

const databids = fs.readFileSync("../data/bids.json", "utf8");
const wordsbids = JSON.parse(databids);

const datacompetition = fs.readFileSync("../data/competitions.json", "utf8");
const wordscompetition = JSON.parse(datacompetition);

export const seed = async () => {
  try {
    //   await Buyers.collection.drop()
    await Buyers.insertMany(wordsbuyers);
    const buyers = await Buyers.find();


    // await Sellers.collection.drop()
    await Sellers.insertMany(wordsSellers);
    const sellers = await Sellers.find();


    // await Bids.collection.drop()
    await Bids.insertMany(wordsbids);
    const bids = await Bids.find();


    // await Competition.collection.drop()
    await Competition.insertMany(wordscompetition);
    const competition = await Competition.find();
    // console.log("see competition" + competition);
  } catch (error) {
    console.log(error);
  }
};
