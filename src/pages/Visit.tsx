import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { TMinimeType } from "api/types/minime";
import { TObjetResType } from "api/types/objet";
import { MiniHome } from "components/minime/MiniHome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert } from "utils/alert";

export const Visit = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const uid = searchParams.get('uid');
    const nick = searchParams.get('nick');

    const [minime, setMinime] = useState<TMinimeType>({minimeId: 0, minimeUrl: ""});
    const [objet, setObjet] = useState<[]>([]);
    const [isLike, setIsLike] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(0);
    const [point, setPoint] = useState<number>(0);

    // GET 미니홈 조회
    const getMiniHome = async () => {
        try{
            const res = await instance.get("/api/homepy", {params: {id: uid}});
            if(res.data.result === "Y"){
                const minimeData = res.data.data.minime;
                const objetData = res.data.data.objet;
                const likeStatusData = res.data.data.status;
                const likeData = res.data.data.like;
                const pointData = res.data.data.point;

                setMinime({
                    ...minime,
                    minimeId: minimeData.id,
                    minimeUrl: minimeData.url
                });
                setObjet(objetData?.length !== 0 ? objetData?.map((item: TObjetResType) => ({
                    objetId: item.id,
                    objetPosition: item.position,
                    objetName: item.name,
                    objetUrl: item.url,
                    amount: item.price,
                    use: item.status,
                })): []);
                setIsLike(likeStatusData === 1);
                setLikeCount(likeData);
                setPoint(pointData);
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // PUT 좋아요/취소
    const handleLike = async (like: boolean) => {
        const reqData = {
            id: Number(uid),
            like: like ? 1 : 0
        }
        try{
            const res = await instance.put("/api/homepy/like", reqData);
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // like checkbox handler
    const handleCheck = async () => {
        setIsLike(!isLike);
        const bool = await handleLike(!isLike);
        if(bool){
            Alert.success({
                title: `${!isLike ? "좋아요를 추가했습니다." : "좋아요를 해제했습니다."}`,
                action: (result) => {
                    if(result.isConfirmed){
                        getMiniHome();
                    }
                }
            })
        }
    }

    const hadleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        getMiniHome();
    }, [])

    return(
        <div className="relative">
            <div onClick={hadleBack} className="absolute left-0 top-5 flex justify-start items-center cursor-pointer ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <span className="text-xl ml-2">뒤로가기</span>
            </div>
            <h3 className="text-center text-2xl mb-5">어서오세요!<br/><b className="text-3xl">{nick}</b> 님의 미니홈입니다.</h3>
            <MiniHome
                width={550}
                height={350}
                boxShadow={"0px 0px 20px #c4c4c4"}
                borderRadius={20}
                minime={minime}
                objet={objet}
            />

            <div className="flex align-top justify-center mt-5 w-[550px] m-auto">
                <div className="w-1/2 text-center" style={{borderRight: "1px solid rgb(183, 183, 183)"}}>
                    <span className="block text-xl mx-10">좋아요</span>
                    <span className="line"></span>
                    <span className="flex justify-between items-center">
                        <input type="checkbox" id={`like-${uid}`} name="favorite-checkbox" checked={isLike} onChange={handleCheck}  className="favorite-input" />
                        <label htmlFor={`like-${uid}`} className="container favorite-label">
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <span className="text-2xl ml-2">{likeCount}</span>
                            </div>
                        </label>
                    </span>
                </div>
                <div className="w-1/2 text-center">
                    <span className="block text-xl">사용 Point</span>
                    <span className="line"></span>
                    <span className="block text-2xl">{point?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} Point</span>
                </div>
            </div>


            <style>
                {`
                    .line{
                        width: 15px;
                        height: 1px;
                        background: #898989;
                        display: block;
                        margin: -2px auto 8px;
                    }
                    .favorite-label {
                        gap: 14px;
                        cursor: pointer;
                        user-select: none;
                        color: black;
                    }
                    
                    .favorite-input {
                        display: none;
                    }
                    
                    .favorite-input:checked + .favorite-label svg {
                        fill: hsl(0deg 100% 50%);
                        stroke: hsl(0deg 100% 50%);
                        animation: heartButton 1s;
                    }
                    
                    @keyframes heartButton {
                        0% {
                            transform: scale(1);
                        }
                    
                        25% {
                            transform: scale(1.3);
                        }
                    
                        50% {
                            transform: scale(1);
                        }
                    
                        75% {
                            transform: scale(1.3);
                        }
                    
                        100% {
                            transform: scale(1);
                        }
                    }
                    
                    .favorite-input + .favorite-label .action {
                        position: relative;
                        overflow: hidden;
                        display: grid;
                    }
                    
                    .favorite-input + .favorite-label .action span {
                        grid-column-start: 1;
                        grid-column-end: 1;
                        grid-row-start: 1;
                        grid-row-end: 1;
                        transition: all .5s;
                    }
                    
                    .favorite-input + .favorite-label .action span.option-1 {
                        transform: translate(0px,0%);
                        opacity: 1;
                    }
                    
                    .favorite-input:checked + .favorite-label .action span.option-1 {
                        transform: translate(0px,-100%);
                        opacity: 0;
                    }
                    
                    .favorite-input + .favorite-label .action span.option-2 {
                        transform: translate(0px,100%);
                        opacity: 0;
                    }
                    
                    .favorite-input:checked + .favorite-label .action span.option-2 {
                        transform: translate(0px,0%);
                        opacity: 1;
                    }
                    
                `}
            </style>
        </div>
    )
}