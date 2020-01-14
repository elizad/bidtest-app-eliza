import axiosInstance from "./axiosInstance"

export const getCompetitions = async () => {
  return await axiosInstance("/competitions")
      .then(res => res.data)
      .catch(err => {
        console.log('Error: ', err)
      })
}
