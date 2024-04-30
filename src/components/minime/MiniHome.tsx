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
import { TObjetType } from "api/types/objet";


type TProps = {
    width: number;
    height: number;
    boxShadow: string;
    borderRadius: string|number;
    minime?: TMinimeType;
    objet: [];
}

export const MiniHome = ({
    width, height, boxShadow, borderRadius,
    minime,
    objet,
}: TProps) => {

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

            {
                objet?.length !== 0 && objet?.map((item: TObjetType, key) => (
                    item?.objetPosition === 1 ? (<div key={item.objetId} style={{backgroundColor: item?.objetUrl}} className={`z-[1] w-full absolute top-0 h-[80%]`}></div>) :
                    item?.objetPosition === 2 ? (<div key={item.objetId} style={{backgroundColor: item?.objetUrl}} className={`z-[1] w-full absolute bottom-0 h-[20%]`}></div>) : 
                    item?.objetPosition === 3 ? (
                        <span key={item.objetId} className="z-[2] absolute left-[15%] top-[15%] w-[100px]">
                            <img src={item.objetUrl} alt="objet3" />
                        </span>
                    ) : 
                    item?.objetPosition === 4 ? (
                        <span key={item.objetId} className="z-[2] absolute right-[13%] top-[20%] w-[80px]">
                            <img src={item.objetUrl} alt="objet4" />
                        </span>
                    ) : 
                    item?.objetPosition === 5 ? (
                        <span key={item.objetId} className="z-[2] absolute left-[0%] bottom-[15%] w-[80px]">
                            <img src={item.objetUrl} alt="objet5" />
                        </span>
                    ) : 
                    item?.objetPosition === 6 ? (
                        <span key={item.objetId} className="z-[2] absolute left-[13%] bottom-[15%] w-[90px]">
                            <img src={item.objetUrl} alt="objet6" />
                        </span>
                    ) : 
                    item?.objetPosition === 7 ? (
                        <span key={item.objetId} className="z-[2] absolute left-[30%] bottom-[15%] w-[60px]">
                            <img src={item.objetUrl} alt="objet7" />
                        </span>
                    ) : 
                    item?.objetPosition === 8 ? (
                        <span key={item.objetId} className="z-[2] absolute right-[12%] bottom-[15%] w-[110px]">
                            <img src={item.objetUrl} alt="objet8" />
                        </span>
                    ) : null
                ))
            }
        </div>
    )
}