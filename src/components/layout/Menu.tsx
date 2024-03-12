import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Menu = () => {

    const location = useLocation();
    const path: string = location.pathname;
    const [isLogin, setIsLogin] = useState<boolean>(false);

    // 기본 메뉴
    const menuList = [
        {name: "공지", link: "/home"},
        {name: "일기 쓰기", link: "/home"},
        {name: "미니미", link: "/home"},
        {name: "랭킹", link: "/home"},
    ]
    // 로그인 후 서브 메뉴
    const subMenuList = [
        {name: "사용 방법", link: "/home"},
        {name: "내 정보", link: "/home"},
    ]
    // 비로그인시 메뉴 - 로그인 화면
    const guestMenuList1 = [
        {name: "홈으로", link: "/home"},
        {name: "사용 방법", link: "/home"},
    ]
    // 비로그인시 메뉴 - 로그인 화면 아님
    const guestMenuList2 = [
        {name: "사용 방법", link: "/home"},
        {name: "로그인", link: "/login"},
    ]

    return(
        <div className={`flex w-full ${path !== "/login" ? "justify-between" : "justify-end"}`}>
            {
                path !== "/login" &&
                    <nav>
                        {menuList?.map((menu, key) => (
                            <Link to={`${menu?.link}`} className="px-3 first:pl-0 text-xl hover:font-black" key={key} >
                                {menu?.name}
                            </Link>
                        ))}
                    </nav>
            }
            <nav>
                {(isLogin ? subMenuList : path === "/login" ? guestMenuList1 : guestMenuList2)?.map((menu, key) => (
                    <Link to={`${menu?.link}`} className="px-3 last:pr-0 text-lg text-gray-500 hover:font-black hover:text-gray-800" key={key} >
                        {menu?.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}