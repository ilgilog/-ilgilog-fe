import instance from "api/axios";
import Minime from "../../assets/images/minime/1-step1.png";
import Objet3 from "../../assets/objet/1/13.png";
import Objet4 from "../../assets/objet/1/14.png";
import Objet5 from "../../assets/objet/1/15.png";
import Objet6 from "../../assets/objet/1/16.png";
import Objet7 from "../../assets/objet/1/17.png";
import Objet8 from "../../assets/objet/1/18.png";
import { axiosError } from "api/axiosUtil";
import { useEffect, useState } from "react";
import { TMinimeType } from "api/types/minime";


type TProps = {
    width: number;
    height: number;
    boxShadow: string;
    borderRadius: string|number;
}

export const MiniHome = ({
    width, height, boxShadow, borderRadius
}: TProps) => {

    const [minime, setMinime] = useState<TMinimeType>({minimeId: 0, minimeUrl: ""})
    const [objet, setObjet] = useState<any>()

    // GET 미니홈 조회
    const getMiniHome = async () => {
        try{
            const res = await instance.get("/api/homepy");
            if(res.data.result === "Y"){
                console.log(res.data.data)
                const minimeData = res.data.data.minime;
                const objetData = res.data.data.objet;

                setMinime({
                    ...minime,
                    minimeId: minimeData.id,
                    minimeUrl: minimeData.url
                });
                setObjet(objetData);
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getMiniHome();
    }, []);

    return(
        <div className={` m-auto overflow-hidden relative`} style={{
            borderRadius: borderRadius,
            width: width,
            height: height,
            boxShadow: boxShadow
        }}>
            {/* 0 */}
            <span className="z-10 absolute left-[50%] bottom-[12%] translate-x-[-50%] w-[100px]">
                <img src={minime?.minimeUrl} alt="minime" />
            </span>
            {/* 1 */}
            <div className="w-full h-[80%] bg-[#f9e6d1]"></div>
            {/* 2 */}
            <div className="w-full h-[20%] bg-[#efdaba]"></div>
            {/* 3 */}
            <span className="absolute left-[15%] top-[15%] w-[100px]">
                <img src={Objet3} alt="objet3" />
            </span>
            {/* 4 */}
            <span className="absolute right-[13%] top-[20%] w-[80px]">
                <img src={Objet4} alt="objet4" />
            </span>
            {/* 5 */}
            <span className="absolute left-[0%] bottom-[15%] w-[80px]">
                <img src={Objet5} alt="objet5" />
            </span>
            {/* 6 */}
            <span className="absolute left-[13%] bottom-[15%] w-[90px]">
                <img src={Objet6} alt="objet6" />
            </span>
            {/* 7 */}
            <span className="absolute left-[30%] bottom-[15%] w-[60px]">
                <img src={Objet7} alt="objet7" />
            </span>
            {/* 8 */}
            <span className="absolute right-[12%] bottom-[15%] w-[110px]">
                <img src={Objet8} alt="objet8" />
            </span>
        </div>
    )
}