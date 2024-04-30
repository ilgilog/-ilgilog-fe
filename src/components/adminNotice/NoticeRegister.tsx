import instance from "api/axios";

export const NoticeRegister = () => {

    const postNoticeList = async () => {
        try{
            const res = await instance.delete("/api/notice", {params: {id: 2} });
            if(res.data.result === "Y"){
                console.log(res)
            }
        }catch(err: any){

        }
    }

    return(
        <div>
            <button type="button" onClick={postNoticeList}>등록</button>
        </div>
    )
}