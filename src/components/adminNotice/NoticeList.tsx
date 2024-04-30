import instance from "api/axios"
import { useEffect } from "react";

export const NoticeList = () => {

    const getNoticeList = async () => {
        try{
            const res = await instance.get("/api/notice");
            if(res.data.result === "Y"){
                console.log(res.data.data)
            }
        }catch(err: any){

        }
    }

    useEffect(() => {
        getNoticeList();
    }, [])

    return(
        <div>

        </div>
    )
}