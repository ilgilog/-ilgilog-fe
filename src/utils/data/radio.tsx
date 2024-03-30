import { MdSunny, MdWbCloudy } from "react-icons/md";
import { IoRainySharp } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { ImSleepy } from "react-icons/im";
import { 
    FaRegSnowflake, 
    FaRegFaceSadTear,
    FaRegFaceSmile,
    FaRegFaceAngry,
    FaRegFaceFlushed,
    FaRegFaceSurprise,
    FaRegFaceGrimace,
    FaRegCircleQuestion,
    FaRegFaceTired,
    FaRegFaceFrown
} from "react-icons/fa6";

export const weatherData = [
    {name: "weather", value: 1, key: "맑음", icon: <MdSunny />},
    {name: "weather", value: 2, key: "흐림", icon: <MdWbCloudy />},
    {name: "weather", value: 3, key: "비", icon: <IoRainySharp />},
    {name: "weather", value: 4, key: "눈", icon: <FaRegSnowflake />},
    {name: "weather", value: 5, key: "번개", icon: <AiFillThunderbolt />},
]

export const moodData = [
    {name: "mood", value: 1, key: "좋음", icon: <FaRegFaceSmile />},
    {name: "mood", value: 2, key: "슬픔", icon: <FaRegFaceSadTear />},
    {name: "mood", value: 3, key: "화남", icon: <FaRegFaceAngry />},
    {name: "mood", value: 4, key: "어이없음", icon: <FaRegFaceFlushed />},
    {name: "mood", value: 5, key: "놀람", icon: <FaRegFaceSurprise />},
    {name: "mood", value: 6, key: "초조함", icon: <FaRegFaceGrimace />},
    {name: "mood", value: 7, key: "졸림", icon: <ImSleepy />},
    {name: "mood", value: 8, key: "궁금함", icon: <FaRegCircleQuestion />},
    {name: "mood", value: 9, key: "무서움", icon: <FaRegFaceTired />},
    {name: "mood", value: 10, key: "시무룩", icon: <FaRegFaceFrown />},
]