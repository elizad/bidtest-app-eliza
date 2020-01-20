import axiosInstance from "./axiosInstance"

export const getBids =  () => {
  return axiosInstance("/bids")
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err)
      })
}
