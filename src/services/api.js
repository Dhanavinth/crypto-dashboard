import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinlore.net/api",
});

export default api;