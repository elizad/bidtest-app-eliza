import * as types from "../types";
import * as bids from "../../api/Bids";

const setBids = res => {
  return {
    type: types.bids.SET_BIDS,
    res
  };
};

export const getBids = () => dispatch => {
  return bids.getBids().then(res => {
    dispatch(setBids(res))
  });
};
