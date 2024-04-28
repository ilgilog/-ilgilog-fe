import { getStorageUserInfo } from "utils/function";
import { TStorageUserInfo } from "./typs/login";
import { Alert } from "utils/alert/Alert";

// 토큰 갱신
export const tokenRefresh = async (instance: any) => {

    const userInfo: TStorageUserInfo = getStorageUserInfo();
    const refreshToken: string = userInfo?.refreshToken;
    console.log(refreshToken)
    const { data } = await instance.post('/api/user/token',{}, {
        headers: { 
            "Content-Type": 'application/json',
            "authorization": `Bearer ${refreshToken}` 
        },
    });

    console.log("tokenRefresh -->", data);

    if(data.result === "Y"){
        const newUserInfo: {} = {
            userId: userInfo?.userId,
            accessToken: data?.accessToken,
            refreshToken: data?.refreshToken,
        }
    
        console.log("갱신 완료!!", newUserInfo);
        localStorage.setItem('igl-user-info', JSON.stringify(newUserInfo));
    }else if(data.result === "N" && data.code === 1004){
        Alert.error({ 
            title: "로그인 시간이 만료되었습니다.",
            action: () => {
                // window.location.href = "/login";
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
