import instance from "api/axios";
import { axiosError } from "api/axiosUtil";
import { MyCont } from "components/myInfo/MyCont"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Alert } from "utils/alert"

export const MyInfo = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: 0, 
        email: "",
        nickname: "",
        point: 0
    });

    // GET 회원 정보 조회
    const getUserProfile = async () => {
        try{
            const res = await instance.get("/api/user/profile");
            if(res.data.result === "Y"){
                const result = res.data.data[0];
                setUserData({
                    id: result.id,
                    email: result.email,
                    nickname: result.nickname,
                    point: result.point
                })
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }
    // DELETE 탈퇴하기
    const deleteUser = async () => {
        try{
            const res = await instance.delete("/api/user/secession");
            console.log(res)
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    // 탈퇴 버튼
    const handleClick = () => {
        Alert.warning({
            title:  "기록되었던 모든 정보가 삭제됩니다. \n 정말 탈퇴하시겠습니까?",
            action: async (result) => {
                if(result.isConfirmed){
                    const delBool = await deleteUser();
                    if(delBool){
                        localStorage.removeItem("igl-user-info");
                        Alert.success({
                            title:  "탈퇴가 완료되었습니다.",
                            action: (result) => {
                                if(result.isConfirmed){
                                    navigate("/login");
                                }
                            }
                        })
                    }
                }
            }
        })
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    return(
        <div className="flex flex-col m-auto w-[70%]">
            <h2 className="flex justify-center text-3xl mt-6 mb-8">내 정보</h2>
            <MyCont
                title={"닉네임"}
                content={userData?.nickname}
                disabled={false}
                getUserProfile={getUserProfile}
            />
            <MyCont
                title={"이메일"}
                content={userData?.email}
                disabled={true}
            />

            <button 
                    className="w-[100px] m-[130px_0_0_auto] cursor-pointer transition-all bg-primary text-white px-6 py-1 rounded-lg
                    border-[#d6af98]
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                    type="button"
                    onClick={handleClick}
                >탈퇴하기</button>
        </div>
    )
}