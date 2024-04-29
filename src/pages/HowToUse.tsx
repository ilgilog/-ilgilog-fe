import { UseDiary } from "components/howToUse/UseDiary"
import { UseMinime } from "components/howToUse/UseMinime"
import { UseObjet } from "components/howToUse/UseObjet"
import { UseShare } from "components/howToUse/UseShare"
import { useEffect, useState } from "react"


export const HowToUse = () => {

    const navData = [
        { title: "일기 쓰기", id: "1" },
        { title: "미니홈 꾸미기", id: "2" },
        { title: "미니홈 공유하기", id: "3" },
        { title: "미니미 키우기", id: "4" },
    ]
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOffsetTop = (id: any) => {
        const element = document.getElementById(id);
        const offsetTop = element?.offsetTop;
        const winHeight = window.innerHeight;
        if (offsetTop !== undefined) {
            if((offsetTop + winHeight) >= scrollPosition + 150 && (offsetTop - winHeight) <= scrollPosition - 100){
                return true
            }else{
                return false
            }
        }
        return false;
    }
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full text-center">
            <nav className="nav-wrap">
                {

                    navData.map(item => (
                        <a style={{
                            background: handleOffsetTop(item.id) ? '#183153' : '',
                            color: handleOffsetTop(item.id) ? '#fff' : ''
                        }} href={`#${item.id}`} key={item.id}>{item.title}</a>
                    ))
                }
            </nav>

            <h4 className="text-[20px] mb-2 mx-auto">안녕하세요, 일기록 입니다. <br /> 일기록 서비스의 사용 방법을 설명드릴게요.</h4>
            <em className="line"></em>
            {/* 일기 쓰기 */}
            <UseDiary />
            <em className="line"></em>
            {/* 미니홈 꾸미기 */}
            <UseObjet />
            <em className="line"></em>
            {/* 미니홈 공유하기  */}
            <UseShare />
            <em className="line"></em>
            {/* 미니미 키우기 */}
            <UseMinime />
            <em className="line"></em>

            <style>
                {`
                    h3{
                        font-size: 32px;
                        font-weight: bold;
                        padding-top: 20px;
                        margin-bottom: 30px;
                    }
                    p{
                        font-size: 22px;
                    }
                    small{
                        font-size: 18px;
                        margin-bottom: 6px;
                        margin-top: -6px;
                        display: block;
                        color: #7c7c7c;
                    }
                    .img-wrap{
                        width: 40%;
                        border: 1px solid #000;
                        border-radius: 10px;
                        margin-bottom: 38px;
                        overflow: hidden;
                    }
                    .img-wrap.min img{
                        width: 30%;
                    }
                    .line{
                        display: block;
                        margin: 0 auto 0px;
                        width: 70%;
                        height: 1px;
                        background: #a5a5a5;
                    }
                    .nav-wrap{
                        position: fixed;
                        right: 5%;
                        top: 30%;
                        width: 200px;
                        padding: 30px 20px;
                        border-radius: 13px;
                        background: #e0e0e0;
                        box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
                    }
                    .nav-wrap a{
                        font-size: 22px;
                        display: block;
                        text-align: left;
                        padding: 0 10px;
                        border-radius: 10px;
                        margin: 3px 0;
                    }
                `}
            </style>
        </div>
    )
}