import { MiniHome } from "components/minime/MiniHome"
import { MiniShare } from "components/minime/MiniShare"
import { MiniShop } from "components/minime/MiniShop";
import { Point } from "components/minime/Point";
import { useEffect, useState } from "react";
import { getActivation, getPoint } from "hooks/hooks";
import { TMinimeType } from "api/types/minime";
import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { TObjetResType } from "api/types/objet";

export const Minime = () => {

    const [isShared, setIsShared] = useState<boolean>(false);
    const [point, setPoint] = useState<string>("");
    const [minime, setMinime] = useState<TMinimeType>({minimeId: 0, minimeUrl: ""});
    const [objet, setObjet] = useState<[]>([]);

    // point 조회
    const handlePoint = async () => {
        const usePoint = await getPoint();
        setPoint(usePoint);
    }
    // 미니홈 공유 여부 조회
    const handleShare = async () => {
        const useActive = await getActivation();
        useActive === 1 ? setIsShared(true) : setIsShared(false);
    }

    // GET 미니홈 조회
    const getMiniHome = async () => {
        try{
            const res = await instance.get("/api/homepy");
            if(res.data.result === "Y"){
                const minimeData = res.data.data.minime;
                const objetData = res.data.data.objet;

                setMinime({
                    ...minime,
                    minimeId: minimeData.id,
                    minimeUrl: minimeData.url
                });
                setObjet(objetData?.length !== 0 && objetData?.map((item: TObjetResType) => ({
                    objetId: item.id,
                    objetPosition: item.position,
                    objetName: item.name,
                    objetUrl: item.url,
                    amount: item.price,
                    use: item.status,
                })));
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getMiniHome();
    }, []);

    useEffect(() => {
        handlePoint();
        handleShare();
    }, []);

    return(
        <div className="flex mt-[3vw]">
            <div className="w-[54%]">
                <MiniShare
                    isShared={isShared}
                    setIsShared={setIsShared}
                />
                <MiniHome
                    width={550}
                    height={350}
                    boxShadow={"0px 0px 20px #c4c4c4"}
                    borderRadius={20}
                    minime={minime}
                    objet={objet}
                />
            </div>
            <div className="w-[1px] bg-gray-400"></div>
            <div className="w-[44%] relative">
                <Point 
                    point={point}
                />
                <MiniShop
                    handlePoint={handlePoint}
                    getMiniHome={getMiniHome}
                />
            </div>            
        </div>
    )
}