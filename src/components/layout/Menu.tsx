import { Link } from "react-router-dom"

export const Menu = () => {

    const menuList = [
        {name: "공지", link: "/home"},
        {name: "일기 쓰기", link: "/home"},
        {name: "미니미", link: "/home"},
        {name: "랭킹", link: "/home"},
    ]
    const subMenuList = [
        {name: "사용 방법", link: "/home"},
        {name: "로그인", link: "/home"},
        // {name: "내 정보", link: "/home"},
    ]

    return(
        <div className="flex justify-between w-full">
            <nav>
                {menuList?.map((menu) => (
                    <Link to={`${menu?.link}`} className="px-3 first:pl-0 text-xl hover:font-black" >
                        {menu?.name}
                    </Link>
                ))}
            </nav>
            <nav>
                {subMenuList?.map((menu) => (
                    <Link to={`${menu?.link}`} className="px-3 last:pr-0 text-lg text-gray-500 hover:font-black hover:text-gray-800" >
                        {menu?.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}