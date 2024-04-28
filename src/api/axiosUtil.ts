import { getStorageUserInfo, timestampNow } from "utils/function";
import { TStorageUserInfo } from "./typs/login";
import { Alert } from "utils/alert/Alert";
import axios from "axios";

// 토큰 갱신
export const tokenRefresh = async (instance: any) => {
    const apiUrl: string|undefined = process.env.REACT_APP_API_URI;
    const userInfo: TStorageUserInfo = getStorageUserInfo();
    const refreshToken: string = userInfo?.refreshToken;
    console.log(refreshToken)
    const body = {
        timestamp: await timestampNow()
    }
    const data = await axios.post(`${apiUrl}/api/user/token`, body, {
        headers: { 
            authorization: `Bearer ${refreshToken}` 
        },
    });

    console.log("tokenRefresh -->", data);

    if(data.data.result === "Y"){
        const newUserInfo: {} = {
            userId: userInfo?.userId,
            accessToken: data.data?.access_token,
            refreshToken: data.data?.refresh_token,
        }
    
        console.log("갱신 완료!!", newUserInfo);
        localStorage.setItem('igl-user-info', JSON.stringify(newUserInfo));
    }else if(data.data.result === "N" && data.data?.code === 1004){
        localStorage.removeItem("igl-user-info");
        Alert.error({ 
            title: "로그인 시간이 만료되었습니다. (1004)",
            action: () => {
                window.location.href = "/login";
            }
        });
    }else if(data.data.result === "N" && data.data?.code === 1005){
        localStorage.removeItem("igl-user-info");
        Alert.error({ 
            title: "로그인 오류가 발생했습니다. (1005)",
            action: () => {
                window.location.href = "/login";
            }
        });
    }
};

export const axiosError = (message: string) => {
    Alert.error({ 
        title: message,
        action: () => {
            
        }
    });
}
