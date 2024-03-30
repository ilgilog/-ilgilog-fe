import { useState } from "react";
import KakaoIcon from "../../assets/images/icons/kakao.png";

export const LoginBtn = () => {

    const [isHover, setIsHover] = useState<boolean>(false);
    const rest_api_key: string|undefined = process.env.REACT_APP_KAKAO_API_KEY;
    const redirect_uri: string|undefined = process.env.REACT_APP_REDIRECT_URI;
    // const redirect_uri: string = 'https://ilgilog-fe.vercel.app/login/auth';
    const kakaoURL: string = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = ()=>{
        window.location.href = kakaoURL;
    }

    return(
        <button 
            onClick={handleLogin} 
            onMouseOver={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)} 
            className="w-full bg-primary-5 h-[45px] flex items-center justify-center rounded-lg cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FEE500] before:to-[#FEE500] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0 text-[#fff] hover:text-[#000] text-lg"
        >
            <img className={`${isHover ? "opacity-100" : "opacity-0"} transition duration-300 w-4 mr-2 absolute left-5`} src={KakaoIcon} alt="kakao-icon" />  카카오 로그인
        </button>
    )
}