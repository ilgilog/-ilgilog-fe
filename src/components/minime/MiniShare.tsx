import instance from "api/axios";
import { Alert } from "utils/alert";

type TProps = {
    isShared: boolean;
    setIsShared: any;
}

export const MiniShare = ({
    isShared,
    setIsShared
}: TProps) => {

    // PUT 미니홈 공유하기
    const handleShared = async (active: number) => {
        try{
            const res = await instance.put("/api/homepy/activation", {activation: active});
            if(res.data.result === "Y"){
                return true;
            }else{
                return false;
            }
        }catch(err: any){

        }
    }

    const handleChange = async () => {
        if(isShared){
            const bool = await handleShared(0);
            if(bool){
                Alert.success({
                    title: "미니홈 공유가 취소되었습니다.",
                    action: () => {
                        setIsShared(false);
                    }
                })
            }
        }else{
            const bool = await handleShared(1);
            if(bool){
                Alert.success({
                    title: "내 미니홈이 랭킹에 등록되었습니다.",
                    action: () => {
                        setIsShared(true);
                    }
                })
            }
        }
    }

    return (
        <div className="w-[550px] m-auto flex justify-between items-center">
            <h2 className="text-3xl">내 미니홈</h2>
            <div>
                <div className="text-right">
                    <span className="px-1 text-l ">미니홈 공유하기</span>
                </div>
                <div className="flex justify-center mb-5">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            className="sr-only peer" 
                            type="checkbox" 
                            onChange={handleChange} 
                            checked={isShared} 
                        />
                        <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none  after:content-['']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-[''] peer-hover:after:scale-125 peer-checked:after:rotate-0">
                        </div>
                    </label>
                </div>  
            </div>
        </div>
        
    )
}