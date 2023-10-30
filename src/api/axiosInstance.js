import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://users-crud-dev-gqna.3.us-1.fl0.io"
});

export default axiosInstance;
