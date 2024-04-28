import { getStorageUserInfo } from "utils/function";
import { TStorageUserInfo } from "./typs/login";
import { useNavigate } from "react-router-dom";
import { Alert } from "utils/alert/Alert";

// 토큰 갱신
export const tokenRefresh = async (instance: any) => {

    const navigate = useNavigate();
    const userInfo: TStorageUserInfo = getStorageUserInfo();
    const refreshToken: string = userInfo?.refreshToken;

    const { data } = await instance.post('/api/user/token', {
        headers: { 'Content-Type': 'application/json', RefreshToken: `Bearer ${refreshToken}` },
    });

    console.log("tokenRefresh -->", data);
    
    if(data.status === 413){
        Alert.error({ 
            title: "로그인 시간이 만료되었습니다.",
            action: () => {
                navigate("/login");
            }
        });
    }else{
        const newUserInfo: {} = {
            userId: userInfo?.userId,
            accessToken: data?.accessToken,
            refreshToken: data?.refreshToken,
        }
    
        console.log("갱신 완료!!", newUserInfo);
        localStorage.setItem('igl-user-info', JSON.stringify(newUserInfo));
    }
};
