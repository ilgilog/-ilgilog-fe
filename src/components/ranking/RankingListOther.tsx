import { useNavigate } from "react-router-dom";

type TProps = {
    isPoint: boolean;
    rankingOther: [];
}
type TOtherRankType = {
    uid: number;
    nickName: string;
    point?: number;
    like?: number;
}

export const RankingListOther = ({
    isPoint,
    rankingOther
}: TProps) => {

    const navigate = useNavigate();
    const moveUserHome = (id: number, nick: string) => {
        navigate(`/visit?uid=${id}&nick=${nick}`);
    }

    return(
        <ul className="pb-20 w-[850px] m-auto ">
            {rankingOther?.length !== 0 && rankingOther?.map((item: TOtherRankType, key) => (
                <li key={item?.uid} className="py-3 px-8 flex justify-between items-center border-[#aeaeae] border-solid border-t-[1px]">
                    <div className="flex justify-start items-center w-[60%]">
                        <span className="text-2xl mr-5 w-10">{key + 4}등</span>
                        <div className="flex justify-start items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="text-2xl block ml-2">{item?.nickName}</span>
                        </div>
                    </div>
                    <div className="mr-10">
                        {!isPoint ? 
                            <span className="text-xl flex justify-between items-center">
                                좋아요 {item?.like && item?.like} 개
                            </span> :
                            <span className="text-xl flex justify-between items-center">
                                사용 Point : <b className="text-2xl ml-3 mr-1">{item?.point && (item?.point).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</b> Point
                            </span>
                        }
                    </div>
                    <div className="cursor-pointer" onClick={() => moveUserHome(item?.uid, item?.nickName)}>
                        <span>미니홈 구경하기</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}