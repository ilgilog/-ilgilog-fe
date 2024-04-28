import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { useEffect, useState } from "react";

export const Point = () => {

    const [point, setPoint] = useState<number>(0);
    const viewPoint = point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    // GET 포인트 조회
    const getPoint = async () => {
        try{
            const res = await instance.get("/api/main/point");
            if(res.data.result === "Y"){
                setPoint(res.data.data[0].point);
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getPoint();
    }, []);

    return(
        <div className="px-10 py-[20px] mb-5 flex justify-between" style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            <span className="text-[25px]">보유 포인트</span>
            <span className="text-[25px]"><b className="text-[25px]">{viewPoint}</b> point</span>
        </div>
    )
}