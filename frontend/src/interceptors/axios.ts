import axios from 'axios'; 

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',  
});

// Intercept request to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add token to every request
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept response to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};
 
    // Handle 401 or 403 errors by removing the token and redirecting if necessary
    if ([401, 403].includes(status)) {

      localStorage.removeItem('token');       
      
      window.location.href = "http://localhost:5173/signin";

    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
