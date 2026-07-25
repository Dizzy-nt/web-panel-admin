import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // url ke backend express 
});

// interceptor untuk menyisipkan token JWT secara otomatis
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    // jika token ada, tambahkan ke bearer token
    if (token) {
        config.headers.Authorization = 'Bearer {token}';
    }
    return config;
});

export default api;