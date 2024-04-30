import { TMinimeType } from "api/types/minime";
import { TObjetResType, TObjetType } from "api/types/objet";


type TProps = {
    width: number;
    height: number;
    boxShadow: string;
    borderRadius: string|number;
    minime: TMinimeType;
    objet: TObjetType[];
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
                <img src={minime?.minimeUrl} alt="minime" className="z-10" />
                <span className="z-[-1] absolute left-[50%] bottom-[-5%] translate-x-[-50%] block w-[70px] h-[25px] bg-[#a2a2a23d] rounded-[50%]"></span>
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