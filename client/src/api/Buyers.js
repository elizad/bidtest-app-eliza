import axiosInstance from "./axiosInstance"

export const getBuyers = () => {
  return axiosInstance("/buyers")
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err)
      })
}
