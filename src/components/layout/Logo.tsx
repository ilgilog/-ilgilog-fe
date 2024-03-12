import { useNavigate } from "react-router-dom"

export const Logo = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    return(
        <h1 onClick={handleClick} className="w-full mb-2 text-4xl cursor-pointer">일기록</h1>
    )
}