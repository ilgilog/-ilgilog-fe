export const ResponsivePage = () => {
    return(
        <div className="text-center w-[100vw] h-[100vh] relative">
            <p className="w-full text-[4.5vw] absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]">
                안녕하세요, 일기록입니다.<br/>
                모바일 환경에서는 일기를 작성할 수 없습니다.<br/>
                <br/>
                매일 일기를 쓰고 포인트를 모아<br/>
                오브제를 구입해서 미니홈을 꾸미려면<br/>
                <em className="text-[4vw] border-b-[1px] border-[#000] border-solid">PC 브라우저</em> 를 이용해주세요.
            </p>
        </div>
    )
}