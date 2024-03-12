import { LoginBtn } from "components/login/LoginBtn"

export const Login = () => {

    return(
        <div className="flex flex-wrap justify-center">
            <div className="px-12 pt-12 pb-12 mt-20 w-[28%]" style={{
                borderRadius: "50px",
                background: "linear-gradient(225deg, #cfcfcf, #f6f6f6)",
                boxShadow: "-20px 20px 60px #c4c4c4,20px -20px 60px #ffffff"
            }}>
                <h1 className="mb-6 text-4xl text-center font-black">일기록</h1>
                <h2 className="w-full text-center text-2xl">간편하게 로그인하고 일기 쓰기</h2>
                <p className="w-full text-center text-gray-600 mb-16">
                    매일 포인트를 모아 집을 꾸며보세요!
                </p>
                <LoginBtn />
            </div>
        </div>
    )
}