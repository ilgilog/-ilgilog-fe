import { useNavigate } from "react-router-dom";
import Egg1 from "../../assets/images/minime/1-egg.png";
import Egg2 from "../../assets/images/minime/2-egg.png";
import Egg3 from "../../assets/images/minime/3-egg.png";
import { useEffect, useState } from "react";
import { Alert } from "utils/alert";
import { axiosError } from "api/axiosUtil";
import instance from "api/axios";

export const EggCont = () => {

    const eggData = [
        {
            id: "1",
            title: "egg1",
            img: Egg1
        },
        {
            id: "2",
            title: "egg2",
            img: Egg2
        },
        {
            id: "3",
            title: "egg3",
            img: Egg3
        },
    ]

    const navigate = useNavigate();
    const [eggList, setEggList] = useState<any[]>([]);
    const [eggId, setEggId] = useState<string>("");

    // GET 알 조회
    const getEggList = async () => {
        try{
            const res = await instance.get("/api/user/minime");
            if(res.data.result === "Y"){
                setEggList(res.data.data);
            }
            console.log(res)
        }catch(err: any){
            axiosError(err.message);
        }
    }
    // POST 알 선택
    const postEggChoice = async () => {
        try{
            const res = await instance.post("/api/user/minime", {id: eggId});
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

    const handleClick = () => {
        Alert.warning({ 
            title:  "결정하시겠습니까?",
            action: async (result) => {
                if(result.isConfirmed){
                    const bool = await postEggChoice();
                    if(bool){
                        Alert.success({
                            title:  "미니미 선택이 완료되었습니다.",
                            action: (result) => {
                                if(result.isConfirmed){
                                    navigate("/home");
                                }
                            }
                        })
                    }
                }
            }
        });
    }

    useEffect(() => {
        getEggList();
    }, []);

    return(
        <div className="px-10 py-8 mt-10 w-[40%]" style={{
            borderRadius: "50px",
            background: "#e0e0e0",
            boxShadow: "-20px 20px 60px #c4c4c4,20px -20px 60px #ffffff"
        }}>
            <ul className="flex justify-between items-center">
                {eggList?.map((item, key) => (
                    <li key={item?.id} className="flex justify-center m-3">
                        <input type="radio" name="egg" id={item?.id} className="hidden" onChange={() => setEggId(item.id)} />
                        <label htmlFor={item?.id} className="cursor-pointer block p-3">
                            <img className="opacity-20 duration-300" src={item?.image} alt={item?.id} />
                        </label>
                    </li>
                ))}
            </ul>

            <em className="not-italic block text-center mt-3 text-[16px] text-gray-500">한 번 선택하면 변경할 수 없습니다!</em>
            <button 
                className="overflow-hidden w-[70%] block mt-1 m-auto p-1 bg-primary-5 text-white rounded-md text-2xl font-bold cursor-pointer relative z-10 group disabled:opacity-20 disabled:cursor-default hover:shadow-[0_9px_15px_-1px_rgba(200,188,188,1)] transition duration-300"
                disabled={eggId === ""}
                onClick={handleClick}
            >
                선택하기
                {eggId !== "" && 
                    <>
                        <span
                            className="absolute w-[80%] h-32 -top-20 -left-4 bg-white rotate-6 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-500 duration-1000 origin-left"
                        ></span>
                        <span
                            className="absolute w-[80%] h-32 -top-20 -left-4 bg-primary-1 rotate-6 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"
                        ></span>
                        <span
                            className="absolute w-[80%] h-32 -top-20 -left-4 bg-primary rotate-6 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-1000 duration-500 origin-left"
                        ></span>
                        <span
                            className="text-2xl group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-1 z-10 text-center block w-[97%] "
                            >선택하기
                        </span>
                    </>
                }

            </button>


            <style>
                {`
                    input:checked + label img {
                        opacity: 1;
                    }
                `}
            </style>
        </div>
    )
}