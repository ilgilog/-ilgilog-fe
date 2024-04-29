import HowToUseImg3 from "assets/images/etc/howtouse-3.png";
import HowToUseImg7 from "assets/images/etc/howtouse-7.png";
import HowToUseImg8 from "assets/images/etc/howtouse-8.png";

export const UseObjet = () => {
    return(
        <div>
            <h3 id="2">- 미니홈 꾸미기 -</h3>

            <p>일기를 작성하면 point를 얻을 수 있습니다.</p>
            <small>( 최초 회원가입 시 200point, 일기를 작성하면 30point 얻을 수 있어요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg7} alt="howtouse-img-7" />
            </div>

            <p>미니홈 탭에서 point를 이용해 다양한 오브제를 구매할 수 있습니다.</p>
            <small>( 다양한 테마를 계속해서 업데이트할 예정이에요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg3} alt="howtouse-img-3" />
            </div>

            <p>지정된 위치에 맞는 오브제 한가지만 적용/해제 할 수 있습니다.</p>
            <small>( 마음에 드는 오브제로 미니홈을 꾸며보세요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg8} alt="howtouse-img-8" />
            </div>
        </div>
    )
}