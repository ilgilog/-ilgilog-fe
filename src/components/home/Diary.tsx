import { weatherData, moodData } from "utils/data/radio";
import { DiaryRadio } from "./DiaryRadio";
import { DiaryTitle } from "./DiaryTitle";
import { useEffect, useState } from "react";
import { Alert } from "utils/alert/Alert";
import { axiosError } from "api/axiosUtil";
import instance from "api/axios";
import { TDiaryReqType } from "api/types/dairy";
import { useNavigate } from "react-router-dom";

type TProps = {
    textDate: string;
    clickDate: string;
    handlePoint: any;
    isPossible?: boolean;
}

export const Diary = ({
    textDate,
    clickDate,
    handlePoint,
    isPossible
}: TProps) => {

    console.log(isPossible)
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [weather, setWeather] = useState<number>(0);
    const [mood, setMood] = useState<number>(0);
    const [isEdit, setIsEdit] = useState(false);

    // GET 일기 조회
    const getDiary = async () => {
        try{
            const res = await instance.get("/api/main/diary", {params : {date : clickDate}});
            if(res.data.result === "Y"){
                const diaryData = res.data.data[0];
                setTitle(diaryData?.title);
                setContent(diaryData?.description);
                setWeather(diaryData?.weather);
                setMood(diaryData?.mood);
                setIsEdit(true);
            }else{
                setTitle("");
                setContent("");
                setWeather(0);
                setMood(0);
                setIsEdit(false);
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // POST|PUT 일기 등록
    const registerDiary = async () => {
        const requestData: TDiaryReqType = {
            date: clickDate,
            title: title,
            description: content,
            weather: weather,
            mood: mood
        }
        const method = isEdit ? 'PUT' : 'POST';
        try{
            const res = await instance.request({
                method: method,
                url: "/api/main/diary",
                data: requestData
            });
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // 일기 등록 버튼
    const handleClick = () => {
        if(title !== "" && content !== "" && weather !== 0 && mood !== 0){
            // 일기 등록
            Alert.warning({ 
                title:  `${textDate}의 일기를 \n ${isEdit ? "수정" : "등록"}하시겠습니까?`,
                action: async (result) => {
                    if(result.isConfirmed){
                        const registerBool = await registerDiary();
                        if(registerBool){
                            Alert.success({
                                title:  `${isEdit ? "수정" : "등록"}이 완료되었습니다.`,
                                action: (result) => {
                                    if(result.isConfirmed){
                                        getDiary();
                                        handlePoint();
                                    }
                                }
                            })
                        }
                    }
                }
            });
        }else{
            Alert.error({ 
                title: `${
                    title === "" ? "일기 제목을 적어주세요." : 
                    content === "" ? "일기 내용을 적어주세요." : 
                    weather === 0 ? "날씨를 선택해주세요." : 
                    mood === 0 ? "기분을 선택해주세요." : null
                }`
            });
        }
    }

    useEffect(() => {
        if(clickDate){
            getDiary();
        }
    }, [clickDate]);

    return(
        <div className="w-[52%] h-[76.5vh] p-[20px]" style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            <DiaryTitle title="[ 날짜 ]">
                <span className={`${textDate ? "text-[20px]" : "text-[18px] opacity-[.3]"} ml-3`}>{textDate ? textDate : "달력에서 날짜를 선택해주세요."}</span>
            </DiaryTitle>
            <DiaryTitle title="[ 날씨 ]">
                <DiaryRadio
                    data={weatherData}
                    onChange={setWeather}
                    defaultData={weather}
                    disabled={!isPossible && !isEdit}
                />
            </DiaryTitle>
            <DiaryTitle title="[ 기분 ]">
                <DiaryRadio
                    data={moodData}
                    onChange={setMood}
                    defaultData={mood}
                    disabled={!isPossible && !isEdit}
                />
            </DiaryTitle>
            <DiaryTitle title="[ 제목 ]">
                <input 
                    type="text"
                    id="title"
                    className="ml-3 text-[22px] px-3 bg-transparent outline-none border-b-[1px] border-[#c4c4c4] w-[80%]"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    disabled={!isPossible && !isEdit}
                />
            </DiaryTitle>
            <DiaryTitle title="[ 내용 ]">
                <textarea 
                    id="content"
                    className="scroll-cont resize-none ml-3 text-[20px] leading-[1] p-3 bg-transparent outline-none border-[1px] border-[#c4c4c4] w-[80%] min-h-[40vh]"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    disabled={!isPossible && !isEdit}
                ></textarea>
            </DiaryTitle>
            {(isPossible || isEdit) &&
                <div className="text-center flex justify-center">
                    <button 
                        type="button" 
                        className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                        bg-primary
                        border-[#d6af98]
                        border-b-[4px] hover:brightness-110 
                        active:border-b-[2px] active:brightness-90
                        disabled:bg-[#929292] disabled:border-[#646464]"
                        onClick={handleClick}
                        // disabled={!isPossible && !isEdit}
                    >{isEdit ? "일기 수정" : "일기 등록"}</button>
                </div>
            }


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