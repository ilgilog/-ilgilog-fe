import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { setClickDate, setClickDateText } from "store/reducers/dateSlice";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece] | any;

export const HomeCalendar = () => {

    const dispatch = useDispatch();
    const today = new Date();
    const [date, setDate] = useState<Value>(today);
    const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date());
    const attendDay = [
        "2024-03-10", 
        "2024-03-20", 
        "2024-03-21", 
        "2024-03-22", 
        "2024-03-23", 
        "2024-03-24", 
        "2024-03-25", 
        "2024-03-26", 
        "2024-03-28", 
        "2024-03-30"
    ];

    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
        const dateObject = new Date(newDate);

        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1 < 10) ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1;
        const day = (dateObject.getDate() < 10) ? `0${dateObject.getDate()}` : dateObject.getDate();
        const dayOfWeek = dateObject.toLocaleDateString('ko-KR', { weekday: 'long' });

        dispatch(setClickDate(`${year}-${month}-${day}`));
        dispatch(setClickDateText(`${year}년 ${month}월 ${day}일 ${dayOfWeek}`));
    };

    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);

        const year = today.getFullYear();
        const month = (today.getMonth() + 1 < 10) ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
        const day = (today.getDate() < 10) ? `0${today.getDate()}` : today.getDate();
        const dayOfWeek = today.toLocaleDateString('ko-KR', { weekday: 'long' });

        dispatch(setClickDate(`${year}-${month}-${day}`));
        dispatch(setClickDateText(`${year}년 ${month}월 ${day}일 ${dayOfWeek}`));
    };

    useEffect(() => {
        handleTodayClick();
    }, []);

    return (
        <div className="w-full flex justify-center relative">
            <Calendar
                value={date}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                calendarType="gregory" // 일요일 부터 시작
                showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                minDetail="year" // 10년단위 년도 숨기기
                // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
                activeStartDate={
                    activeStartDate === null ? undefined : activeStartDate
                }
                onActiveStartDateChange={({ activeStartDate }) =>
                    setActiveStartDate(activeStartDate)
                }
                // 오늘 날짜에 '오늘' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
                tileContent={({ date, view }) => {
                    let html = [];
                    if (
                        view === "month" &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate()
                    ) {
                        html.push(<span key={"today"} className="absolute left-[50%] top-[5%] translate-x-[-50%] text-[#183153]" >Today</span>);
                    }
                    if (
                        attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))
                    ) {
                        html.push(<span key={moment(date).format("YYYY-MM-DD")} className="w-[.4rem] h-[.4rem] absolute left-[50%] top-[70%] translate-x-[-50%] rounded-[50%] bg-rose-400" />);
                    }
                    return <>{html}</>;
                }}
            />
            <span onClick={handleTodayClick} className="absolute right-[7%] top-[6%] w-[15%] bg-[#183153] text-white text-center rounded-md cursor-pointer hover:bg-[#183153cd]">오늘</span>
        </div>
    )
}