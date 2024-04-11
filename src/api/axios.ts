import axios from 'axios'
import { timestampNow } from 'utils/function';

// 1번
const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 1000,
})

instance.interceptors.request.use(
    async (config) => {
        const accessToken = "12345";
        const timestamp = await timestampNow();

        config.headers["Content-Type"] = "application/json"
        config.params = { ...config.params, timestamp: timestamp };
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        // config.withCredentials = true

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
)

instance.interceptors.response.use(
    (response) => {
        if (response.status === 404) {
            console.log('404 페이지로 넘어가야 함!');
        }

        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            // if (isTokenExpired()) await tokenRefresh();

            // const accessToken = getToken();

            // error.config.headers = {
            //     'Content-Type': 'application/json',
            //     Authorization: `Bearer ${accessToken}`,
            // };

            const response = await axios.request(error.config);
            return response;
        }
        return Promise.reject(error);
    }
);

export default instance;

// async function getUser() {
//     try {
//       // 위에서 지정한 baseURL 뒤에 다음 URL이 붙는다.
//       const response = await instance.get('/api/user');
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }