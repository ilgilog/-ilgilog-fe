import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { useEffect, useState } from "react";

type TPurchaseResType = {
    date: string;
    o_name: string;
    oid: number;
    price: number;
}

export const MyPurchaseList = () => {

    const [list, setList] = useState<[]>([]);
    const getPurchaseList = async () => {
        try{
            const res = await instance.get("/api/user/list");
            if(res.data.result === "Y"){
                setList(res.data.data);
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getPurchaseList();
    }, []);

    return(
        <div className="mt-5 pt-2 pb-5" >
            <h3 className="text-center text-xl pb-2" style={{borderBottom: "1px solid rgb(183, 183, 183)"}}>Point 사용 내역</h3>
            <ul className="w-[600px] m-auto">
                <li className="flex items-center text-center mt-3">
                    <span className="block w-[10%]"></span>
                    <span className="block w-[20%]">사용 날짜</span>
                    <span className="block w-[40%]">사용 Point</span>
                    <span className="block w-[30%]">구매 물건</span>
                </li>
                {list.length !== 0 && list?.map((item: TPurchaseResType, key) => (
                    <li className="flex items-center text-center mt-1" key={item?.oid}>
                        <span className="block w-[10%]">{key + 1}</span>
                        <span className="block w-[20%]">{item?.date}</span>
                        <span className="block w-[40%]">{(item?.price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} Point</span>
                        <span className="block w-[30%]">{item?.o_name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}