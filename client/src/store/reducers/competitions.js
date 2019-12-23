import * as types from "../types";
export default (state = [], action) => {
  switch (action.type) {
    case types.competitions.SET_COMPETITIONS:
      console.log(action.res);
      return action.res;
    default:
      return state;
  }
};
