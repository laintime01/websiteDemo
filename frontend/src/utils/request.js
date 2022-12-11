import axios from "axios";

const requests = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || "http://localhost:8900",
  timeout: 5000,
});

export default requests;
