import { HomeCalendar } from "components/home/HomeCalendar";
import { Diary } from "components/home/Diary";
import { Point } from "components/home/Point";
import { useSelector, useDispatch } from "react-redux";
import { StateType, DateState, UserState } from "store/types";

export const Home = () => {

    const clickDateText = useSelector((state: StateType) => state.dateStore.clickDateText);
    const clickDate = useSelector((state: StateType) => state.dateStore.clickDate);

    return(
        <div className="w-full flex justify-between">
            <Diary
                textDate={clickDateText}
                clickDate={clickDate}
            />
            <div className="w-[45%]">
                <Point />
                <HomeCalendar />
            </div>
        </div>
    )
}