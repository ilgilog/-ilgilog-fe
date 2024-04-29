import HowToUseImg1 from "assets/images/etc/howtouse-1.png";
import HowToUseImg2 from "assets/images/etc/howtouse-2.png";
import HowToUseImg6 from "assets/images/etc/howtouse-6.png";

export const UseDiary = () => {
    return(
        <div>
            <h3 id="1">- 일기 쓰기 -</h3>

            <p>일기 쓰기 탭에 들어간 후, 캘린더에 일기를 작성하고 싶은 날짜를 선택합니다.</p>
            <small>( 일기는 오늘로부터 일주일 전까지만 쓸 수 있어요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg1} alt="howtouse-img-1" />
            </div>

            <p>선택한 날짜를 확인하고 그 날의 날씨, 기분을 고른 후에 일기를 작성합니다.</p>
            <small>( 빈 칸이 있으면 일기를 등록할 수 없어요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg2} alt="howtouse-img-2" />
            </div>

            <p>작성 후 일기 등록 버튼을 클릭합니다.</p>
            <small>( 작성한 날짜 확인 후 등록! 작성한 일기는 삭제가 불가능해요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg6} alt="howtouse-img-6" />
            </div>
        </div>
    )
}