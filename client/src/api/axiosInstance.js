import axios from "axios";

/**
 * Create axios instance.
 *
 * @type {AxiosInstance}
 */

const params = {};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
