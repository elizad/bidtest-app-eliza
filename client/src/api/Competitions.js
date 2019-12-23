import axiosInstance from "./axiosInstance";

export const getCompetitions = () => {
  return axiosInstance("/competitions").then(res => res.data);
};
