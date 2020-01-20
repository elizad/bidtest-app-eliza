import * as types from "../types";
import * as competitions from "../../api/Competitions";

const setCompetitions = res => {
  return {
    type: types.competitions.SET_COMPETITIONS,
    res
  };
};

export const getCompetitions = () => dispatch => {
  return competitions.getCompetitions().then(res => {
    dispatch(setCompetitions(res));
  });
};
