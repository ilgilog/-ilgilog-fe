import { MyCont } from "components/myInfo/MyCont"
import { useNavigate } from "react-router-dom"
import { Alert } from "utils/alert"

export const MyInfo = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        Alert.warning({
            title:  "기록되었던 모든 정보가 삭제됩니다. \n 정말 탈퇴하시겠습니까?",
            action: (result) => {
                if(result.isConfirmed){
                    Alert.success({
                        title:  "탈퇴가 완료되었습니다.",
                        action: (result) => {
                            if(result.isConfirmed){
                                navigate("/home");
                            }
                        }
                    })
                }
            }
        })
    }

    return(
        <div className="flex flex-col m-auto w-[70%]">
            <h2 className="flex justify-center text-3xl mt-6 mb-8">내 정보</h2>
            <MyCont
                title={"닉네임"}
                content={"ehddn453"}
                disabled={false}
            />
            <MyCont
                title={"이메일"}
                content={"ehddl453@naver.com"}
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