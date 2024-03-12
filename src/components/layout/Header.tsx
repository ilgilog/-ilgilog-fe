import { useLocation } from "react-router-dom";
import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Header = () => {

    const location = useLocation();

    return(
        <div className="flex flex-wrap flex-1 max-w-[1280px] min-w-[1280px] my-4" >
            {location.pathname !== "/login" && <Logo />}
            <Menu />
        </div>
    )
}