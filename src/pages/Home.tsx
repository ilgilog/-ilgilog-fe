import { HomeCalendar } from "components/home/HomeCalendar";
import { Diary } from "components/home/Diary";
import { Point } from "components/home/Point";
import { useSelector, useDispatch } from "react-redux";
import { StateType, DateState, UserState } from "store/types";
import { useEffect, useState } from "react";
import { getPoint } from "hooks/hooks";

export const Home = () => {

    const clickDateText = useSelector((state: StateType) => state.dateStore.clickDateText);
    const clickDate = useSelector((state: StateType) => state.dateStore.clickDate);
    const [point, setPoint] = useState<string>("");
    const [isPossible, setIsPossible] = useState<boolean>(false);

    const currentDate = new Date();
    console.log(currentDate)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(currentDate.getDate() - 8);

    // 포인트 조회
    const handlePoint = async () => {
        const usePoint = await getPoint();
        setPoint(usePoint);
    }

    useEffect(() => {
        handlePoint();
    }, []);

    useEffect(() => {
        if(clickDate && new Date(clickDate) >= oneWeekAgo && new Date(clickDate) <= currentDate){
            setIsPossible(true);
        }else{
            setIsPossible(false);
        }
    }, [clickDate]);

    return(
        <div className="w-full flex justify-between">
            <Diary
                textDate={clickDateText}
                clickDate={clickDate}
                handlePoint={handlePoint}
                isPossible={isPossible}
            />
            <div className="w-[45%]">
                <Point point={point} />
                <HomeCalendar />
            </div>
        </div>
    )
}