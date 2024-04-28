import axios from 'axios'
import { Alert } from 'utils/alert/Alert';
import { getStorageUserInfo, timestampNow } from 'utils/function';
import { TStorageUserInfo } from './typs/login';
import { tokenRefresh } from './axiosUtil';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URI}`,
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
                    window.location.href = "/login";
                }
            });
            return config;
        }

        config.headers["Content-Type"] = "application/json"
        config.headers['authorization'] = `Bearer ${accessToken}`;
        config.withCredentials = true;

        config.data = { ...config.data, timestamp: timestamp };
        if (config.method && config.method.toLowerCase() === 'get') {
            config.params = { ...config.params, timestamp: timestamp };
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
)

instance.interceptors.response.use(
    async (response) => {
        if(response.data.code === 1006){
            await tokenRefresh(instance);
            const userInfo: TStorageUserInfo = getStorageUserInfo();
            const accessToken = userInfo?.accessToken;
            response.config.headers.authorization = `Bearer ${accessToken}`;
            
            return await axios(response.config);
        }

        return response;
    },
    async (error) => {
        console.log("axios template error --> ", error);
        
        return Promise.reject(error);
    }
);

export default instance;