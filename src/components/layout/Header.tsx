import { Logo } from "./Logo"
import { Menu } from "./Menu"

export const Header = () => {
    return(
        <div className="flex flex-wrap flex-1 max-w-[1280px] min-w-[1280px] my-4" >
            <Logo />
            <Menu />
        </div>
    )
}