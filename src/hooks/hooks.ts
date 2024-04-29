import instance from "api/axios";
import { axiosError } from "api/axiosUtil";

// GET 포인트 조회
export const getPoint = async () => {
    try{
        const res = await instance.get("/api/main/point");
        if(res.data.result === "Y"){
            const point = res.data.data?.point;
            const viewPoint = point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            return viewPoint;
        }
    }catch(err: any){
        axiosError(err.message);
    }
}

// GET 미니홈 공유 여부 조회
export const getActivation = async () => {
    try{
        const res = await instance.get("/api/homepy/activation");
        if(res.data.result === "Y"){
            return res.data.data?.activation;
        }
    }catch(err: any){
        axiosError(err.message);
    }
}