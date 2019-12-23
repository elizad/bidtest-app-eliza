import axiosInstance from "./axiosInstance";

export const getBuyers = async() => {
  return await axiosInstance("/buyers").then(res => res.data);
};
