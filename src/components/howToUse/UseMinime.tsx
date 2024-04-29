import HowToUseImg11 from "assets/images/etc/howtouse-11.png";
import HowToUseImg12 from "assets/images/etc/howtouse-12.png";

export const UseMinime = () => {
    return(
        <div>
            <h3 id="4">- 미니미 키우기 -</h3>

            <p>최초 로그인 시 선택하는 알이 미니미입니다.</p>
            <small>( 알의 종류에 따라 태어나는 미니미가 달라져요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg11} alt="howtouse-img-11" />
            </div>

            <p>미니미는 일기 작성 횟수가 증가할수록 성장합니다.</p>
            <small>( 알 → 유년기 → 성장기 → 완전체 4단계로 되어있어요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg12} alt="howtouse-img-12" />
            </div>

        </div>
    )
}