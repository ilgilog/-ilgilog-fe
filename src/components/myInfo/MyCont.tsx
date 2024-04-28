import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { useEffect, useState } from "react";
import { Alert } from "utils/alert";

type Tprops = {
    title: string;
    content: string;
    disabled: boolean;
    getUserProfile?: any;
}

export const MyCont = ({
    title,
    content,
    disabled,
    getUserProfile
}: Tprops) => {

    const [nickName, setNickName] = useState<string>("");
    if(title === "닉네임"){
        console.log(content)
    }
    
    // PUT 닉네임 변경
    const changeNick = async () => {
        try{
            const res = await instance.put("/api/user/profile", {nickName: nickName});
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    const handleClick = () => {
        console.log(nickName, )
        Alert.warning({
            title: "닉네임을 변경하시겠습니까?",
            action: async (result) => {
                if(result.isConfirmed){
                    if(nickName !== ""){
                        const delBool = await changeNick();
                        if(delBool){
                            Alert.success({
                                title:  "닉네임이 변경되었습니다.",
                                action: (result) => {
                                    if(result.isConfirmed){
                                        // 정보 다시 불러오기
                                        getUserProfile();
                                    }
                                }
                            })
                        }else{
                            Alert.error({
                                title:  "오류가 발생했습니다.",
                            })
                        }
                    }else{
                        Alert.error({
                            title:  "닉네임을 입력해주세요.",
                        })
                    }
                }
            }
        })
    }

    useEffect(() => {
        if(title === "닉네임"){
            
        }
    }, []);

    return (
        <div className="flex justify-center items-center mb-5 relative">
            <h3 className="text-2xl mr-5">{title}</h3>
            <input type="text" defaultValue={content} disabled={disabled} onChange={(e) => {
                title === "닉네임" && setNickName(e.target.value);
            }} />
            {title === "닉네임" &&
                <button 
                    className="absolute right-[22%] top-50% cursor-pointer transition-all bg-primary text-white px-6 py-1 rounded-lg
                    border-[#d6af98]
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    type="button"
                    onClick={handleClick}
                >변경</button>
            }


            <style>
                {`
                    input {
                        width: 250px;
                        border: none;
                        outline: none;
                        border-radius: 15px;
                        padding: 10px 20px;
                        background-color: #ccc;
                        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
                        transition: 300ms ease-in-out;
                        font-size: 22px;
                    }
                    
                    input:focus {
                        background-color: white;
                        transform: scale(1.05);
                        box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
                    }
                `}
            </style>
        </div>
    )
}
