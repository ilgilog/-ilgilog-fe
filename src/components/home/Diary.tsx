import { weatherData, moodData } from "utils/data/radio"
import { DiaryRadio } from "./DiaryRadio"
import { DiaryTitle } from "./DiaryTitle"

export const Diary = () => {
    return(
        <div className="w-[52%] h-[76.5vh] p-[20px]" style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            <DiaryTitle title="[ 날짜 ]">
                <span className="text-[20px] ml-3">2024년 03월 30일 토요일</span>
            </DiaryTitle>
            <DiaryTitle title="[ 날씨 ]">
                <DiaryRadio
                    data={weatherData}
                />
            </DiaryTitle>
            <DiaryTitle title="[ 기분 ]">
                <DiaryRadio
                    data={moodData}
                />
            </DiaryTitle>
            <DiaryTitle title="[ 제목 ]">
                <input 
                    type="text"
                    id="title"
                    className="ml-3 text-[22px] px-3 bg-transparent outline-none border-b-[1px] border-[#c4c4c4] w-[80%]"
                />
            </DiaryTitle>
            <DiaryTitle title="[ 내용 ]">
                <textarea 
                    id="content"
                    className="scroll-cont resize-none ml-3 text-[20px] leading-[1] p-3 bg-transparent outline-none border-[1px] border-[#c4c4c4] w-[80%] min-h-[40vh]"
                ></textarea>
            </DiaryTitle>
            
            <div className="text-center flex justify-center">
                <button 
                    type="button" 
                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                    bg-primary
                    border-[#d6af98]
                    border-b-[4px] hover:brightness-110 
                    active:border-b-[2px] active:brightness-90"
                >일기 등록</button>
            </div>

            <style>
                {`
                    input{
                        font-family: "UhBeemysen";
                    }
                    textarea{
                        font-family: "UhBeemysen";
                    }
                `}
            </style>
        </div>
    )
}