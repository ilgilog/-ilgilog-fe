import { axiosError } from "api/axiosUtil";
import instance from "api/axios";
import { useEffect, useState } from "react";
import { TObjetResType, TObjetType } from "api/types/objet";
import { Alert } from "utils/alert";

type TProps = {
    handlePoint: any;
    getMiniHome: any;
}

export const MiniShop = ({
    handlePoint,
    getMiniHome
}: TProps) => {

    const [objetList, setObjetList] = useState([]);

    // GET 오브제 상점 가져오기
    const getObjetShop = async () => {
        try{
            const res = await instance.get("/api/homepy/store");
            if(res.data.result === "Y"){
                const list = res.data.data;
                setObjetList(list?.map((item: TObjetResType) => ({
                    objetId: item.id,
                    objetPosition: item.position,
                    objetName: item.name,
                    objetUrl: item.url,
                    amount: item.price,
                    buy: item.purchase === 1,
                    use: item.status === 1,
                })));
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // POST 오브제 구매
    const handleObjet = async (method: string, url: string, objetId: number) => {
        try{
            const res = await instance.request({
                method: method,
                url: url,
                data: {id: objetId}
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

    const handleClick = (active: string, objetId: number) => {
        Alert.warning({
            title: `이 오브제를 ${active}하시겠습니까?`,
            action: async (result) => {
                if(result.isConfirmed){
                    const bool = await handleObjet(
                        active === "구매" ? "POST" : 
                        active === "적용" ? "PUT" :
                        active === "해제" ? "PUT" : "", 
                        active === "구매" ? "/api/homepy/objet" : 
                        active === "적용" ? "/api/homepy/objet/apply" :
                        active === "해제" ? "/api/homepy/objet/release" : "" , objetId);
                    if(bool){
                        Alert.success({
                            title: `${active}되었습니다.`,
                            action: (result) => {
                                if(result.isConfirmed){
                                    getObjetShop();
                                    handlePoint();
                                    getMiniHome();
                                }
                            }
                        })
                    }
                }
            }
        })
    }

    useEffect(() => {
        getObjetShop();
    }, []);

    return(
        <div>
            <h3 className="flex justify-center text-3xl mb-5">오브제</h3>
            <ul className="scroll-cont flex justify-center py-5 flex-wrap w-full m-auto h-[400px] overflow-y-scroll">
                {objetList?.map((item: TObjetType) => (
                    <li key={item?.objetId} className="w-[25%] text-center mb-7">
                        <span className="block w-[80px] h-[80px] m-auto mb-2">
                            {item?.objetPosition === 1 || item?.objetPosition === 2 ? 
                                <span style={{backgroundColor: item?.objetUrl}} className="block w-full h-full"></span> :
                                <img src={item?.objetUrl} alt={item?.objetName} />
                            }
                        </span>
                        {
                            item?.buy !== true ? 
                                <button 
                                    type="button"
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-[#f8d269]
                                    border-[#f6c644]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                    onClick={() => handleClick("구매", item?.objetId)}
                                >{item?.amount} point</button> : 
                            item?.buy === true && item?.use !== true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-primary
                                    border-[#d6af98]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                    onClick={() => handleClick("적용", item?.objetId)}
                                >적용하기</button> : 
                            item?.buy === true && item?.use === true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-[#909090]
                                    border-[#5b5b5b]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                    onClick={() => handleClick("해제", item?.objetId)}
                                >해제하기</button> : null
                        }
                    </li>
                ))}
            </ul>


            <style>
                {`
                    .scroll-cont::-webkit-scrollbar{
                        width: 6px;
                        // display: none;
                    }
                    .scroll-cont::-webkit-scrollbar-thumb{
                        background-color: #c7c7c7;
                        border-radius: 0.5rem;
                    }
                    .scroll-cont::-webkit-scrollbar-track{
                        background-color: #e8e8e8;
                        border-radius: 1rem;
                    }
                `}
            </style>
        </div>
    )
}