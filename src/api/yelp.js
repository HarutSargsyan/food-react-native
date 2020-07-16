import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: process.env.API_KEY,
  },
});
