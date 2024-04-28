import axios from "axios";
import { useEffect } from "react";
import { timestampNow } from "../utils/function";
import { useNavigate } from "react-router-dom";
import { TLoginResType } from "api/typs/login";
import { Alert } from "utils/alert/Alert";
import { useDispatch } from "react-redux";

export const KakaoAuth = () => {

    const apiUrl: string|undefined = process.env.REACT_APP_API_URI;
    const navigate = useNavigate();

    useEffect(() => {
        const kakaoCode = new URL(window.location.href).searchParams.get("code");
        const fetchData = async () => {
            const body = {
                timestamp: await timestampNow()
            }
            try{
                const res = await axios.post(`${apiUrl}/api/user/login`, body, {
                    headers: {
                        authorization: `Bearer ${kakaoCode}`
                    }
                });
                const result: TLoginResType = res?.data?.data;
                console.log(result)
                const userInfo: {} = {
                    userId: result?.id,
                    accessToken: result?.accessToken,
                    refreshToken: result?.refreshToken,
                }
                localStorage.setItem("igl-user-info", JSON.stringify(userInfo));

                if(result?.firstLogin === 1){
                    navigate("/egg-choice");
                }else{
                    navigate("/home");
                }
            }catch (err: any){
                console.log(err)
                Alert.error({ 
                    title: err?.message,
                    action: () => {
                        navigate(-1);
                    }
                });
            }
        }

        fetchData();
    }, [])

    return(
        <></>
    )
}