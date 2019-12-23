import * as types from "../types";
import * as buyers from "../../api/Buyers";

const setBuyers = res => {
  return {
    type: types.buyers.SET_BUYERS,
    res
  };
};

export const getBuyers = () => dispatch => {
  return buyers.getBuyers().then(res => {
    dispatch(setBuyers(res));
  });
};
