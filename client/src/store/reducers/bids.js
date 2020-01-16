import * as types from "../types";
export default (state = [], action) => {
  switch (action.type) {
    case types.bids.SET_BIDS:
      return action.res;
    default:
      return state;
  }
};
