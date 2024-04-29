import { TStorageUserInfo } from "api/types/login";
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Alert } from "utils/alert";
import { getStorageUserInfo } from "utils/function";

export const Menu = () => {

    const location = useLocation();
    const path: string = location.pathname;
    const navigate = useNavigate();
    const userInfo = getStorageUserInfo();
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        userInfo ? setIsLogin(true) : setIsLogin(false);
    }, []);

    // 기본 메뉴
    const menuList = [
        {name: "일기 쓰기", link: "/home"},
        {name: "미니홈", link: "/minime"},
        {name: "랭킹", link: "/rank"},
        {name: "공지", link: "/notice"},
    ]
    // 로그인 후 서브 메뉴
    const subMenuList = [
        {name: "사용 방법", link: "/howtouse"},
        {name: "내 정보", link: "/my"},
        {name: "로그아웃", link: "/logout"},
    ]
    // 비로그인시 메뉴 - 로그인 화면
    const guestMenuList1 = [
        {name: "홈으로", link: "/index"},
        {name: "사용 방법", link: "/howtouse"},
    ]
    // 비로그인시 메뉴 - 로그인 화면 아님
    const guestMenuList2 = [
        {name: "사용 방법", link: "/howtouse"},
        {name: "로그인", link: "/login"},
    ]

    // 준비중 alert
    const handleClick = () => {
        Alert.error({ 
            title:  "준비중입니다!",
            action: () => {
                navigate(-1);
            }
        });
    }
    // 로그인 alert
    const handleLogin = () => {
        if(!isLogin){
            Alert.error({ 
                title:  "로그인이 필요한 서비스입니다.",
                action: () => {
                    navigate("/login");
                }
            });                 
        }
    }
    // 로그아웃 alert
    const handleLogout = () => {
        Alert.warning({ 
            title:  "로그아웃 하시겠습니까?",
            action: (result) => {
                if(result.isConfirmed){
                    localStorage.removeItem("igl-user-info");
                    Alert.success({ 
                        title:  "로그아웃 되었습니다.",
                        action: () => {
                            navigate("/login");
                        }
                    });   
                }
            }
        });   
    }

    return(
        <div className={`flex relative w-full ${path !== "/login" ? "justify-between" : "justify-end"}`}>
            {
                path !== "/login" &&
                    <nav>
                        {menuList?.map((menu, key) => (
                            <Link onClick={() => {
                                if(menu.link !== "/notice"){
                                    handleLogin();
                                }
                            }} to={isLogin ? `${menu?.link}` : !isLogin && menu.link === "/notice" ? `${menu?.link}` : ""} className={`${path === menu?.link ? "bg-primary" : ""} rounded-md px-1 mx-2 first:ml-0 text-xl hover:font-black`} key={key} >
                                {menu?.name}
                            </Link>
                        ))}
                    </nav>
            }
            {path === "/home" && <p className="text-xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">안녕하세요, <b className="text-2xl">{userInfo?.nickName}</b> 님</p>}
            <nav>
                {(isLogin ? subMenuList : path === "/login" ? guestMenuList1 : guestMenuList2)?.map((menu, key) => (
                    <Link
                        onClick={() => {
                            if(menu.link === "/logout"){
                                handleLogout();
                            }
                        }} 
                        to={`${menu?.link}`} className={`${path === menu?.link ? "bg-primary text-[#000]" : ""} rounded-md px-1 mx-2 last:mr-0 text-lg text-gray-500 hover:font-black hover:text-gray-800`} key={key} >
                        {menu?.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}