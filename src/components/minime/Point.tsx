
type Tprops = {
    point: string;
}

export const Point = ({point}: Tprops) => {



    return(
        <div className="absolute right-0 top-[-35px]">
            <span className="text-[22px] mr-3">보유 포인트</span>
            <span className="text-[25px]"><b className="text-[25px]">{point}</b> point</span>
        </div>
    )
}