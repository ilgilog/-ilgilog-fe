import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Alert } from 'utils/alert/Alert';
import { getStorageUserInfo, timestampNow } from 'utils/function';
import { TStorageUserInfo } from './typs/login';
import { tokenRefresh } from './axiosUtil';

const navigate = useNavigate();

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 1000,
})

instance.interceptors.request.use(
    async (config) => {

        const userInfo: TStorageUserInfo = getStorageUserInfo();
        const accessToken: string = userInfo.accessToken;
        const timestamp = await timestampNow();

        if (!accessToken) {
            Alert.error({ 
                title: "오류가 발생했습니다.",
                action: () => {
                    navigate("/login");
                }
            });
            return config;
        }

        config.headers["Content-Type"] = "application/json"
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.params = { ...config.params, timestamp: timestamp };
        config.withCredentials = true;

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
        console.log("axios template error -->", error);
        // if (error.response?.status === 401) {

        // }
        // auth 토큰 만료, refresh 토큰 정상 -> auth 토큰 갱신
        if (error.response?.status === 412) {
            await tokenRefresh(instance);
            const userInfo: TStorageUserInfo = getStorageUserInfo();
            const accessToken = userInfo?.accessToken;
            error.config.headers.Authorization = `Bearer ${accessToken}`;

            return instance(error.config);
        }else if (error.response?.status === 413) {
            Alert.error({ 
                title: "로그인 시간이 만료되었습니다.",
                action: () => {
                    navigate("/login");
                }
            });
        }
        
        return Promise.reject(error);
    }
);

export default instance;

// async function getUser() {
//     try {
//       const response = await instance.get('/api/user');
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }