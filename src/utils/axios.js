import axios from 'axios';

const axiosServices = axios.create({ baseURL: 'https://mock-data-api-nextjs.vercel.app/' || 'http://localhost:3010/' });
// console.log(import.meta.env.REACT_APP_API_URL)
// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/login')) {
      window.location = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosServices;
