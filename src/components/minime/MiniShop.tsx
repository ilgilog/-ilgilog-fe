import Objet3 from "../../assets/objet/1/13.png";
import Objet4 from "../../assets/objet/1/14.png";
import Objet5 from "../../assets/objet/1/15.png";
import Objet6 from "../../assets/objet/1/16.png";
import Objet7 from "../../assets/objet/1/17.png";
import Objet8 from "../../assets/objet/1/18.png";

export const MiniShop = () => {

    const objetDummy = [
        {
            objetId: 11,
            objetPosition: 1,
            objetName: "쇼파",
            objetUrl: "#f9e6d1",
            amount: 300,
            buy: false,
            use: false
        },
        {
            objetId: 12,
            objetPosition: 2,
            objetName: "쇼파",
            objetUrl: "#efdaba",
            amount: 300,
            buy: true,
            use: false
        },
        {
            objetId: 13,
            objetPosition: 3,
            objetName: "쇼파",
            objetUrl: Objet3,
            amount: 1200,
            buy: false,
            use: false
        },
        {
            objetId: 14,
            objetPosition: 4,
            objetName: "쇼파",
            objetUrl: Objet4,
            amount: 300,
            buy: true,
            use: false
        },
        {
            objetId: 15,
            objetPosition: 5,
            objetName: "쇼파",
            objetUrl: Objet5,
            amount: 300,
            buy: true,
            use: false
        },
        {
            objetId: 16,
            objetPosition: 6,
            objetName: "쇼파",
            objetUrl: Objet6,
            amount: 300,
            buy: false,
            use: false
        },
        {
            objetId: 17,
            objetPosition: 7,
            objetName: "쇼파",
            objetUrl: Objet7,
            amount: 300,
            buy: false,
            use: false
        },
        {
            objetId: 18,
            objetPosition: 8,
            objetName: "쇼파",
            objetUrl: Objet8,
            amount: 300,
            buy: true,
            use: true
        }
    ]

    return(
        <div>
            <h3 className="flex justify-center text-3xl mb-5">오브제</h3>
            <ul className="scroll-cont flex justify-center py-5 flex-wrap w-full m-auto h-[400px] overflow-y-scroll">
                {objetDummy.map((item, key) => (
                    <li key={item?.objetId} className="w-[25%] text-center mb-7">
                        <span className="block w-[80px] h-[80px] m-auto mb-2">
                            {item?.objetPosition === 1 || item?.objetPosition === 2 ? 
                                <span className={`bg-[${item?.objetUrl}] block w-full h-full`}></span> :
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
                                >{item?.amount} point</button> : 
                            item?.buy === true && item?.use !== true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-primary
                                    border-[#d6af98]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                >적용하기</button> : 
                            item?.buy === true && item?.use === true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-[#909090]
                                    border-[#5b5b5b]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                >해제하기</button> : null
                        }
                    </li>
                ))}
                {objetDummy.map((item, key) => (
                    <li key={item?.objetId} className="w-[25%] text-center mb-5">
                        <span className="block w-[80px] h-[80px] m-auto mb-1">
                            {item?.objetPosition === 1 || item?.objetPosition === 2 ? 
                                <span className={`bg-[${item?.objetUrl}] block w-full h-full`}></span> :
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
                                >{item?.amount} point</button> : 
                            item?.buy === true && item?.use !== true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-primary
                                    border-[#d6af98]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
                                >적용하기</button> : 
                            item?.buy === true && item?.use === true ? 
                                <button 
                                    type="button" 
                                    className="cursor-pointer transition-all w-[70px] text-white py-[2px] rounded-lg
                                    bg-[#909090]
                                    border-[#5b5b5b]
                                    border-b-[4px] hover:brightness-110 
                                    active:border-b-[2px] active:brightness-90"
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