import axiosInstance from "./axiosInstance";

export const getSellers = async () => {
  return await axiosInstance("/sellers").then(res => res.data);
};
