import { RankList } from "components/ranking/RankList"
import { RankToggle } from "components/ranking/RankToggle"
import { useState } from "react";

export const Ranking = () => {
    
    const [isPoint, setIsPoint] = useState<boolean>(false);

    return(
        <div>
            <h2 className="flex justify-center text-3xl mt-3 mb-2">미니홈 랭킹</h2>
            <small className="block text-center text-[18px] text-[#585858]">
                * {!isPoint ? "좋아요를 많이 받은 순서대로 나타납니다." : "사용한 Point가 많은 순서대로 나타납니다."}
            </small>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center cursor-pointer ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <span className="text-xl ml-2">새로고침</span>
                </div>
                <RankToggle
                    isPoint={isPoint}
                    setIsPoint={setIsPoint}
                />
            </div>
            
            <RankList
                isPoint={isPoint}
            />


        </div>
    )
}