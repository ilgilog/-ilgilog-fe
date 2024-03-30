import { MiniHome } from "components/minime/MiniHome"

export const RankList = () => {

    const test = [1, 2, 3, 4, 5]

    return(
        <ul className="grid grid-cols-3 gap-x-20 my-10 ml-[-34px] w-[1280px] absolute left-[50%] translate-x-[-50%]">
            {test?.map((item, key) => (
                <li className="scale-75 origin-top w-[450px] m-auto" key={key}>
                    <div className="w-full bg-white py-5 rounded-xl relative">
                        <div className="flex justify-start items-center px-5 pb-3 border-b-[1px] border-solid border-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="text-3xl block ml-3">ehddn453</span>
                        </div>
                        
                        <MiniHome
                            width={450}
                            height={300}
                            boxShadow={"none"}
                            borderRadius={0}
                        />

                        <div className="px-5 pt-5 border-t-[1px] border-solid border-gray-400">
                            <span className="flex justify-between items-center w-1/2 mb-1">
                                <input type="checkbox" id="favorite" name="favorite-checkbox" value="favorite-button" className="favorite-input" />
                                <label htmlFor="favorite" className="container favorite-label">
                                    <div className="flex justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        <span className="text-3xl ml-2">38 개</span>
                                        <div className="action ml-3">
                                            <span className="option-1 text-3xl">좋아요</span>
                                            <span className="option-2 text-3xl">좋아요 취소</span>
                                        </div>
                                    </div>
                                </label>
                            </span>
                            <span className="flex justify-between items-center">
                                <input type="checkbox" id="favorite" name="favorite-checkbox" value="favorite-button" className="favorite-input" />
                                <label htmlFor="favorite" className="container favorite-label">
                                    <div className="flex justify-start items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>
                                        <span className="text-3xl ml-2">12,000 포인트 사용</span>
                                    </div>
                                </label>
                            </span>
                        </div>

                        <div className="absolute right-[-13%] top-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill={
                                key === 0 ? "#fdd33e" : key === 1 ? "#c0c0c0" : key === 2 ? "#d87d3d" : "#d5bdaf"
                                } viewBox="0 0 24 24" strokeWidth={.3} stroke="#000" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                            <span className="text-3xl text-[#000] absolute right-9 top-8 transform rotate-[46deg]">{key+1}등</span>
                        </div>
                    </div>
                </li>
            ))}

            <style>
                {`
                    .favorite-label {
                        background-color: white;
                        gap: 14px;
                        cursor: pointer;
                        user-select: none;
                        color: black;
                    }
                    
                    .favorite-input {
                        display: none;
                    }
                    
                    .favorite-input:checked + .favorite-label svg {
                        fill: hsl(0deg 100% 50%);
                        stroke: hsl(0deg 100% 50%);
                        animation: heartButton 1s;
                    }
                    
                    @keyframes heartButton {
                        0% {
                            transform: scale(1);
                        }
                    
                        25% {
                            transform: scale(1.3);
                        }
                    
                        50% {
                            transform: scale(1);
                        }
                    
                        75% {
                            transform: scale(1.3);
                        }
                    
                        100% {
                            transform: scale(1);
                        }
                    }
                    
                    .favorite-input + .favorite-label .action {
                        position: relative;
                        overflow: hidden;
                        display: grid;
                    }
                    
                    .favorite-input + .favorite-label .action span {
                        grid-column-start: 1;
                        grid-column-end: 1;
                        grid-row-start: 1;
                        grid-row-end: 1;
                        transition: all .5s;
                    }
                    
                    .favorite-input + .favorite-label .action span.option-1 {
                        transform: translate(0px,0%);
                        opacity: 1;
                    }
                    
                    .favorite-input:checked + .favorite-label .action span.option-1 {
                        transform: translate(0px,-100%);
                        opacity: 0;
                    }
                    
                    .favorite-input + .favorite-label .action span.option-2 {
                        transform: translate(0px,100%);
                        opacity: 0;
                    }
                    
                    .favorite-input:checked + .favorite-label .action span.option-2 {
                        transform: translate(0px,0%);
                        opacity: 1;
                    }
                    
                `}
            </style>
        </ul>
    )
}