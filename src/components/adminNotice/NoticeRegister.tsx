import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { useState } from "react";
import { Alert } from "utils/alert";

type TProps = {
    title: string;
    description: string;
    noticeId: number;
    setTitle: any;
    setDescription: any;
    setNoticeId: any;
    getNoticeList: any;
}

export const NoticeRegister = ({
    title,
    description,
    noticeId,
    setTitle,
    setDescription,
    setNoticeId,
    getNoticeList
}: TProps) => {

    // POST/PUT 공지사항 등록/수정
    const postNoticeList = async (method: string, data: {}) => {
        try{
            const res = await instance.request({
                method: method,
                url: "/api/notice",
                data: data
            });
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    const handleClick = async () => {
        if(noticeId === 0){
            const bool = await postNoticeList("POST", {
                title: title,
                description: description
            })
            if(bool){
                Alert.success({
                    title: "공지가 등록되었습니다.",
                    action: (result) => {
                        if(result.isConfirmed){
                            setTitle("");
                            setDescription("");
                            setNoticeId(0);
                            getNoticeList();
                        }
                    }
                })
            }
        }else{
            const bool = await postNoticeList("PUT", {
                title: title,
                description: description,
                id: noticeId
            })
            if(bool){
                Alert.success({
                    title: "공지가 수정되었습니다.",
                    action: (result) => {
                        if(result.isConfirmed){
                            setTitle("");
                            setDescription("");
                            setNoticeId(0);
                            getNoticeList();
                        }
                    }
                })
            }
        }
    }

    return(
        <div className="mb-6">
            <div className="flex justify-start items-start mb-2">
                <span className="text-[18px] mr-1">제목</span>
                <input 
                    type="text"
                    id="title"
                    className="ml-3 text-[18px] px-3 bg-transparent outline-none border-b-[1px] border-[#c4c4c4] w-[90%]"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className="flex justify-start items-start mb-2">
                <span className="text-[18px] mr-1">내용</span>
                <textarea 
                    id="description"
                    className="disabled:text-[#898989] disabled:text-center disabled:pt-24 scroll-cont resize-none ml-3 text-[16px] leading-[1] p-3 bg-transparent outline-none border-[1px] border-[#c4c4c4] w-[90%] min-h-[20vh]"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
            </div>
            <div className="text-right" >
                <button className="px-5 rounded-lg" style={{border: "1px solid #898989"}} type="button" onClick={handleClick}>{noticeId === 0 ? "등록" : "수정"}</button>
            </div>
        </div>
    )
}