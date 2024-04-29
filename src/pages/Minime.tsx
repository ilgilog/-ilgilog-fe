import { MiniHome } from "components/minime/MiniHome"
import { MiniShare } from "components/minime/MiniShare"
import { MiniShop } from "components/minime/MiniShop";
import { Point } from "components/minime/Point";
import { useEffect, useState } from "react";
import { getPoint } from "hooks/point";

export const Minime = () => {

    const [isShared, setIsShared] = useState<boolean>(false);
    const [point, setPoint] = useState<string>("");

    // point 조회
    const handlePoint = async () => {
        const usePoint = await getPoint();
        setPoint(usePoint);
    }

    useEffect(() => {
        handlePoint();
    }, []);

    return(
        <div className="flex mt-[3vw]">
            <div className="w-[54%]">
                <MiniShare
                    isShared={isShared}
                    setIsShared={setIsShared}
                />
                <MiniHome
                    width={550}
                    height={350}
                    boxShadow={"0px 0px 20px #c4c4c4"}
                    borderRadius={20}
                />
            </div>
            <div className="w-[1px] bg-gray-400"></div>
            <div className="w-[44%] relative">
                <Point 
                    point={point}
                />
                <MiniShop
                    handlePoint={handlePoint}
                />
            </div>            
        </div>
    )
}