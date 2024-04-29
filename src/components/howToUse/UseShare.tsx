import HowToUseImg4 from "assets/images/etc/howtouse-4.png";
import HowToUseImg5 from "assets/images/etc/howtouse-5.png";
import HowToUseImg9 from "assets/images/etc/howtouse-9.png";
import HowToUseImg10 from "assets/images/etc/howtouse-10.png";

export const UseShare = () => {
    return(
        <div>
            <h3 id="3">- 미니홈 공유하기 ( 랭킹 ) -</h3>

            <p>나만의 미니홈을 다른 사용자들과 공유할 수 있습니다. <br/>공유하기가 활성화되면 랭킹에 나의 미니홈이 등록됩니다.</p>
            <small>( 공유하기 버튼이 초록색이면 랭킹에 등록되어 있는 상태에요! )</small>
            <div className="text-center m-auto img-wrap min flex justify-around">
                <img src={HowToUseImg4} alt="howtouse-img-4" />
                <img src={HowToUseImg5} alt="howtouse-img-5" />
            </div>

            <p>랭킹 탭에서 현재 순위를 확인할 수 있습니다.</p>
            <small>( 좋아요 개수 or 사용 포인트로 랭킹이 나타나요! )</small>
            <div className="text-center m-auto img-wrap">
                <img src={HowToUseImg9} alt="howtouse-img-9" />
            </div>

            <p>좋아요/포인트 순으로 랭킹을 확인할 수 있습니다.</p>
            <div className="text-center m-auto img-wrap ">
                <img src={HowToUseImg10} alt="howtouse-img-10" className="w-[60%] m-auto" />
            </div>

        </div>
    )
}