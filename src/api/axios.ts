import axios from 'axios'

export const authFetch = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
})

authFetch.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json"
        config.headers["Accept"] = "application/json";
        // config.withCredentials = true
        // config.headers.token = localStorage.getItem("cedarson-auth-token");
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
)

// authFetch.post('/url', {id: 1});