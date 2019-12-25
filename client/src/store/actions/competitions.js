import * as types from "../types";
import * as competitions from "../../api/Competitions";

const setCompetitions = res => {
  return {
    type: types.competitions.SET_COMPETITIONS,
    res
  };
};

export const getCompetitions = () => async dispatch => {
  return await competitions.getCompetitions().then(res => {
    dispatch(setCompetitions(res));
  });
};
