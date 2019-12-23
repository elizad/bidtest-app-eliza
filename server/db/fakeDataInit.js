import fs from "fs";

const databuyers = fs.readFileSync("../data/buyers.json", "utf8");
const wordsbuyers = JSON.parse(databuyers);

export const seed = async () => {
  try {
    // console.log(buyers);
  } catch (error) {
    console.log(error);
  }
};
