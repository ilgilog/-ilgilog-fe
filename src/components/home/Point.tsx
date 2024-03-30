export const Point = () => {
    return(
        <div className="px-10 py-[20px] mb-5 flex justify-between" style={{
            borderRadius: "30px",
            background: "#e0e0e0",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
        }}>
            <span className="text-[25px]">보유 포인트</span>
            <span className="text-[25px]">3,500 point</span>
        </div>
    )
}