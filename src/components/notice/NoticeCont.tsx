export const NoticeCont = () => {

    const noticeDummy = [
        {
            title: "공지사항 제목입니다.",
            version: "0.0.4",
            content: "공지사항 내용입니다. 이것 저것 업데이트 되었습니다.",
            date: "2024.03.16"
        },
        {
            title: "공지사항 제목입니다.",
            version: "0.0.3",
            content: "공지사항 내용입니다. 와르르르",
            date: "2024.03.15"
        },
        {
            title: "공지사항 제목입니다.",
            version: "0.0.2",
            content: "공지사항 내용입니다. 르르르르",
            date: "2024.03.14"
        },
        {
            title: "공지사항 제목입니다.",
            version: "0.0.1",
            content: "공지사항 내용입니다. 와르르르 와르르르르르",
            date: "2024.03.10"
        }
    ]

    return(
        <ul className="notice-cont m-auto p-5 w-[60%] border-t-[1px] border-b-[1px] border-solid border-gray-400 h-[500px] overflow-y-scroll">
            {noticeDummy?.map((item, key) => (
                <li className="flex justify-center mb-5 last:m-0">
                    <aside className="bg-black text-white p-4 rounded-lg w-full max-w-lg font-mono">
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-2 text-red-500">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <p className="text-sm">bash</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-green-400 text-[20px]">$ {item?.title}</p>
                            <p className="text-white text-[16px]">v {item?.version}</p>
                            <p className="text-white text-[20px]">{item?.content}</p>
                            <p className="text-green-400 text-[16px]">$ {item?.date}</p>
                        </div>
                    </aside>
                </li>
            ))}

            <style>
                {`
                    .notice-cont::-webkit-scrollbar{
                        width: 6px;
                        display: none;
                    }
                    .notice-cont::-webkit-scrollbar-thumb{
                        background-color: #000;
                        border-radius: 0.5rem;
                    }
                    .notice-cont::-webkit-scrollbar-track{
                        background-color: #e0e0e0;
                        border-radius: 1rem;
                    }
                `}
            </style>
        </ul>
    )
}