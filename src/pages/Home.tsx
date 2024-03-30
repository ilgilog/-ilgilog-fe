import { HomeCalendar } from "components/home/HomeCalendar";
import { Diary } from "components/home/Diary";
import { Point } from "components/home/Point";

export const Home = () => {
    return(
        <div className="w-full flex justify-between">
            <Diary />
            <div className="w-[45%]">
                <Point />
                <HomeCalendar />
            </div>
        </div>
    )
}