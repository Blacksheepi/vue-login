import axios from 'axios';
import NProgress from 'nprogress';

const config = {
    method: 'get',
    baseURL: 'http://localhost:8080',
    headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json;charset=utf-8',
    },
    timeout: 10000,
    responseType: 'json', 
}

axios.interceptors.request.use (config => {
    NProgress.start();
    return config;
}, err => {
    return Promise.reject(err);
})

axios.interceptors.response.use (response => {
    NProgress.done();
    return response;
}, err => {
    return Promise.reject(err);
})

export default axios.create(config);

