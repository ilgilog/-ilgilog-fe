import instance from "api/axios";
import { axiosError } from "api/axiosUtil";

type TProps = {
    noticeList: [];
    setTitle: any;
    setDescription: any;
    setNoticeId: any;
}

type TNoticeResType = {
    id: number;
    title: string;
    description: string;
    new: 0 | 1;
    date: string;
}

export const NoticeList = ({
    noticeList,
    setTitle,
    setDescription,
    setNoticeId
}: TProps) => {

    const fixedNotice = (title: string, des: string, id: number) => {
        setTitle(title);
        setDescription(des);
        setNoticeId(id);
    }

    const handleDelete = async (id: number) => {
        try{
            const res = await instance.delete("/api/notice", {params: {id: id}});
            if(res.data.result === "Y"){
                console.log(res.data)
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    return(
        <ul>
            <li className="flex items-center text-center">
                <span className="block w-[5%]">Num</span>
                <span className="block w-[10%]">날짜</span>
                <span className="block w-[25%]">제목</span>
                <span className="block w-[45%]">내용</span>
                <span className="block w-[5%]">신규</span>
                <span className="block w-[5%]"></span>
                <span className="block w-[5%]"></span>
            </li>
            {noticeList?.length !== 0 && noticeList?.map((item: TNoticeResType, key) => (
                <li className="flex items-center text-center" key={item?.id}>
                    <span className="block w-[5%]">{item?.id}</span>
                    <span className="block w-[10%]">{item?.date}</span>
                    <span className="block w-[25%] break-words whitespace-pre-line">{item?.title}</span>
                    <span className="block w-[45%] break-words whitespace-pre-line">{item?.description}</span>
                    <span className="block w-[5%]">{item?.new === 1 ? "O" : "X"}</span>
                    <span className="block w-[5%] cursor-pointer" onClick={() => fixedNotice(item?.title, item?.description, item?.id)}>수정</span>
                    <span className="block w-[5%] cursor-pointer" onClick={() => handleDelete(item?.id)}>삭제</span>
                </li>
            ))
            }

            <style>
                {`
                    li{
                        border-bottom: 1px solid #898989;
                        padding: 8px 0;
                    }
                `}
            </style>
        </ul>
    )
}