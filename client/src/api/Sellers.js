import axiosInstance from "./axiosInstance"

export const getSellers = () => {
  return  axiosInstance("/sellers")
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err)
      })
}
