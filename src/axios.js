import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Change this to your base URL or file path
  });

  // Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
      // You can modify the request config here if needed
      console.log('Request sent:', config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // You can process the response data here if needed
      console.log('Response received:', response);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;