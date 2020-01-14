import axiosInstance from "./axiosInstance"

export const getSellers = async () => {
  return await axiosInstance("/sellers")
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err)
      })
}
