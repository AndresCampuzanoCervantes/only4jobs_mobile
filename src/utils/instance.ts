import axiosInstance from  'axios';
const axios = axiosInstance.create({
    baseURL: 'https://only4jobs-db.herokuapp.com/api',
});

export default axios;
