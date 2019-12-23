import * as types from "../types";
import * as sellers from "../../api/Sellers";

const setSellers = res => {
  return {
    type: types.sellers.SET_SELLERS,
    res
  };
};

export const getSellers = () => dispatch => {
  return sellers.getSellers().then(res => {
    dispatch(setSellers(res));
    // console.log("===================set seller action");
    // console.log(setSellers(res));
  });
};
