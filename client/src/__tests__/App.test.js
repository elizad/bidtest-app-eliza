import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Layout from "../Layouts/PageLayout/index.js";
import Routes from "../pages/index.js";

it("renders the Bids layout without crashing", () => {
  ReactDOM.render(<Routes />, "");
});

it("renders the Nav layout without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Layout />, div);
});

// test("React-Bootstrap App", () => {
//   const { getByText } = render(<App />);
//   // const linkElement = getByText(/topten/i);
//   expect(getByText).toBeInTheDocument();
// });
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });
