import axios from 'axios'
import { Alert } from 'utils/alert/Alert';
import { getStorageUserInfo, timestampNow } from 'utils/function';
import { TStorageUserInfo } from './types/login';
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
                title: "오류가 발생했습니다.\n 잠시 후에 다시 시도해주세요.",
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
        }else if(response.data.code === 2001){
            Alert.error({ 
                title: "에러가 발생했습니다.\n 잠시 후에 다시 시도해주세요.",
                action: () => {
                    localStorage.removeItem("igl-user-info");
                    window.location.href = "/login";
                }
            });
        }else if(response.data.code === 1001){
            Alert.error({ 
                title: "에러가 발생했습니다.\n 잠시 후에 다시 시도해주세요.",
                action: () => {
                    
                }
            });
        }else if(response.data.code === 1011){
            Alert.error({ 
                title: "보유 중인 포인트가 부족합니다.",
                action: () => {
                    
                }
            });
        }

        return response;
    },
    async (error) => {
        console.log("axios template error --> ", error);

        if(error.response.status === 404){
            // Alert.error({ 
            //     title: "404 ERROR",
            //     action: () => {
            //         window.location.href = "/login";
            //     }
            // });
        }
        
        return Promise.reject(error);
    }
);

export default instance;