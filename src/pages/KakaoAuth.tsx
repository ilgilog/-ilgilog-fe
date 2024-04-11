import axios from "axios";
import { useEffect } from "react";
import { timestampNow } from "../utils/function";

export const KakaoAuth = () => {

    const apiUrl: string|undefined = process.env.REACT_APP_API_URI;

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
                })
                console.log(res.data.data)
            }catch (err){
                console.log(err)
            }
        }

        fetchData();
    }, [])

    return(
        <></>
    )
}