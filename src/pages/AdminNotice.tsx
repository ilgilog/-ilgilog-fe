import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { NoticeList } from "components/adminNotice/NoticeList"
import { NoticeRegister } from "components/adminNotice/NoticeRegister"
import { useEffect, useState } from "react";

export const AdminNotice = () => {

    const [noticeList, setNoticeList] = useState<[]>([]);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [noticeId, setNoticeId] = useState<number>(0);


    // GET 공지사항 불러오기
    const getNoticeList = async () => {
        try{
            const res = await instance.get("/api/notice");
            if(res.data.result === "Y"){
                setNoticeList((res.data.data)?.reverse());
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getNoticeList();
    }, [])
    
    return(
        <div>
            <h2 className="text-2xl">[ Admin Notice ]</h2>

            <NoticeRegister
                title={title}
                description={description}
                noticeId={noticeId}
                setTitle={setTitle}
                setDescription={setDescription}
                setNoticeId={setNoticeId}
                getNoticeList={getNoticeList}
            />
            <NoticeList
                noticeList={noticeList}
                setTitle={setTitle}
                setDescription={setDescription}
                setNoticeId={setNoticeId}
            />
        </div>
    )
}