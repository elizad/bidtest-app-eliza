import * as types from "../types";
export default (state = [], action) => {
  switch (action.type) {
    case types.buyers.SET_BUYERS:
      console.log(action.res);
      return action.res;
    default:
      return state;
  }
};
