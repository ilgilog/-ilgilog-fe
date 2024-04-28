import IndexImg from "assets/images/etc/index-1.png";

export const Index = () => {
    return(
        <div className="w-full text-center">
            <h2 className="text-[40px] my-2 font-black">일기록 - 일기쓰고 미니홈 꾸미기</h2>
            
            <h2 className="text-[25px]">매일 쓰는 일기로 나를 발견하고<br/>미니미를 키우며 소중한 순간을 기록해요.</h2>
            <div className="w-[70%] text-center m-auto">
                <img src={IndexImg} alt="index-img-1" />
            </div>
            <h2 className="text-[25px]">이 모든 경험들을 담아 나만의 특별한 미니홈을 꾸며요.</h2>
            
            <h2 className="text-[30px] font-black">매일 일기를 쓰고 포인트를 모아 집을 꾸며보세요!</h2>
        </div>
    )
}