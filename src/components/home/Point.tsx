import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { useEffect, useState } from "react";
import { getPoint } from "hooks/point";

export const Point = () => {

    const [point, setPoint] = useState<string>("");

    const handlePoint = async () => {
        const usePoint = await getPoint();
        setPoint(usePoint);
    }

    useEffect(() => {
        handlePoint();
    }, []);

    return(
        <div className="px-10 py-[20px] mb-5 flex justify-between" style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            <span className="text-[25px]">보유 포인트</span>
            <span className="text-[25px]"><b className="text-[25px]">{point}</b> point</span>
        </div>
    )
}