import axiosInstance from  'axios';
const axios = axiosInstance.create({
    baseURL: 'https://only4jobs.herokuapp.com/api',
});

export default axios;
