import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { NoticeList } from "components/adminNotice/NoticeList"
import { NoticeRegister } from "components/adminNotice/NoticeRegister"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert } from "utils/alert";

export const AdminNotice = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const adminId = searchParams.get('admin');
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
        if(adminId !== "dbehddn"){
            Alert.error({
                title: "비정상적인 접근입니다.",
                action: (result) => {
                    if(result.isConfirmed){
                        navigate("/index");
                    }
                }
            })
        }else{
            getNoticeList();
        }
    }, [])
    
    return(
        <div>
            {adminId === "dbehddn" && 
                <div className="mb-10">
                    <h2 className="text-2xl text-center mb-5">[ Admin Notice ]</h2>
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
            }

        </div>
    )
}