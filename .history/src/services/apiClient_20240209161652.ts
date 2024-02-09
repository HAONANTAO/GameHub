import axios from "axios";

axios.create({
  params: {
    baseURL: "https://api.rawg.io/api",
    //kwag.io key for adtabase
    key: "12bc87a0e0b74680a9cdd5b46dbe99ba",
  },
});
