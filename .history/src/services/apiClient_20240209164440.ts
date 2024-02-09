import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "12bc87a0e0b74680a9cdd5b46dbe99ba",
  },
});

export default apiClient;
