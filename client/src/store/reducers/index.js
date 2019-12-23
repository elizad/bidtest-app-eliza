import { combineReducers } from "redux";
import buyers from "./buyers";
import bids from "./bids";
import competitions from "./competitions";
import sellers from "./sellers";

export default combineReducers({
  buyers,
  bids,
  sellers,
  competitions
});
