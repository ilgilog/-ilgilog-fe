import axios from "axios";
import { useEffect } from "react"

export const KakaoAuth = () => {

    const apiUrl: string|undefined = process.env.REACT_APP_API_URI;

    useEffect(() => {
        const kakaoCode = new URL(window.location.href).searchParams.get("code");
        console.log(kakaoCode)
        try{
            const res = axios.post(`${apiUrl}/api/user/login`, {}, {
                headers: {
                    Authorization: `Bearer ${kakaoCode}`
                }
            })
        }catch{

        }
    }, [])

    return(
        <></>
    )
}