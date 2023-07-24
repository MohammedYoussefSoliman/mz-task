import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  transformRequest: [
    (data, headers) => {
      headers!["private-key"] = process.env.NEXT_PUBLIC_PRIVATE_KEY;
      return data;
    },
  ],
});

export default instance;
