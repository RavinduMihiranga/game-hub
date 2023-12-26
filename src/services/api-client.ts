import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c478d0708a404bacbc74c23097c111e7",
  },
});
