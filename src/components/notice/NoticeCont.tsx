export const NoticeCont = () => {

    const noticeDummy = [
        {
            title: "서비스 업데이트 안내",
            content: "저희는 새로운 기능과 개선된 서비스로 여러분에게 더 나은 경험을 제공하기 위해 노력하고 있습니다. 이에 따라 다음과 같은 내용으로 업데이트가 예정되어 있습니다:\n새로운 기능 추가:\nXYZ 기능을 도입하여 사용자들이 더욱 쉽게 ABC를 할 수 있도록 지원합니다.\n인터페이스 개선:\nUI/UX를 개선하여 사용자들이 서비스를 보다 편리하게 이용할 수 있도록 합니다.\n버그 수정:\n이전 버전에서 발견된 일부 버그들을 수정하여 서비스의 안정성을 향상시켰습니다.\n업데이트 일정은 다음과 같습니다:\n일자: MM월 DD일 (월요일)\n시간: 오전 HH:MM\n본 업데이트로 인해 일시적인 서비스 중단이 있을 수 있으며, 이에 대한 양해와 너그러운 이해를 부탁드립니다. \n감사합니다.",
            date: "2024.03.16"
        },
        {
            title: "공지사항 제목입니다.",
            content: "공지사항 내용입니다. 와르르르",
            date: "2024.03.15"
        },
        {
            title: "공지사항 제목입니다.",
            content: "공지사항 내용입니다. 르르르르",
            date: "2024.03.14"
        },
        {
            title: "공지사항 제목입니다.",
            content: "공지사항 내용입니다. 와르르르 와르르르르르",
            date: "2024.03.10"
        }
    ]

    return (
        <ul className="scroll-cont m-auto p-5 w-[60%] h-[500px] overflow-y-scroll">
            {noticeDummy?.map((item, key) => (
                <li className="mb-5 last:m-0 w-full rounded-2xl bg-white px-5 py-3">
                    <div className="flex items-center justify-between w-full pb-3">
                        <div className="flex items-center">
                            <span className="icon">
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
                                </svg>
                            </span>
                            <h3 className="text-xl ml-3">{item?.title}</h3>
                        </div>
                        <span>{item?.date}</span>
                    </div>
                    <p className="whitespace-pre-line min-h-20 pt-3 border-t-[1px] border-solid border-gray-300 text-lg">
                        {item?.content}
                    </p>
                </li>
            ))}

            <style>
                {`
                    .icon {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9999px;
                        background-color: #d5bdaf;
                        padding: 0.5rem;
                        color: rgba(255, 255, 255, 1);
                    }
                    
                    .icon svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `}
            </style>
        </ul>
    )
}