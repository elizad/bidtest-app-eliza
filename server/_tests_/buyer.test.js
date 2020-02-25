import Buyers from "../models/buyers";

const app = require("../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const  Buyers = require(Buyers)

console.log(request);
app.use("/api", Buyers);

it("Gets the test endpoint", async done => {
  // Sends GET Request to /test endpoint
  const res =  request.get("/api/buyers");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
  done();
});
