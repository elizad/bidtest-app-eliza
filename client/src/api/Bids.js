import axiosInstance from "./axiosInstance";

export const getBids = async () => {
  return await axiosInstance("/bids").then(res => res.data);
};
