import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Change this to your actual API URL if needed
  timeout: 5000, // Request timeout (5 seconds)
  headers: { "Content-Type": "application/json" },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data?.error || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
