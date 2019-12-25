import * as types from "../types";
import * as bids from "../../api/Bids";

const setBids = res => {
  return {
    type: types.bids.SET_BIDS,
    res
  };
};

export const getBids = () => async dispatch => {
  return await bids.getBids().then(res => {
    dispatch(setBids(res));
  });
};
