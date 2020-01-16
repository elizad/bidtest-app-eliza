import * as types from "../types";
export default (state = [], action) => {
  switch (action.type) {
    case types.sellers.SET_SELLERS:
      return action.res;
    default:
      return state;
  }
};
