import instance from 'api/axios';
import { axiosError } from 'api/axiosUtil';
import { TNoticeResType } from 'api/types/notice';
import { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export const NoticeCont = () => {

    const [noticeList, setNoticeList] = useState<[]>([]);

    // GET 공지사항 불러오기
    const getNoticeList = async () => {
        try{
            const res = await instance.get("/api/notice");
            if(res.data.result === "Y"){
                setNoticeList((res.data.data)?.reverse());
            }
        }catch(err: any){
            axiosError(err.message);
        }
    }

    useEffect(() => {
        getNoticeList();
    }, [])

    return (
        <div className='w-[80%] m-auto'>
            <Accordion allowZeroExpanded>
                {noticeList?.map((item: TNoticeResType, key) => (
                    <AccordionItem key={key} >
                        <AccordionItemHeading className='pt-3 pb-2'>
                            <AccordionItemButton>
                                <div className="flex items-center">
                                    <span className="icon">
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <h3 className="text-xl ml-3">
                                        {item?.title}
                                        {item?.new === 1 && <span className="text-lg font-black text-white bg-red-500 px-1.5 ml-3 rounded-lg">N</span>}
                                    </h3>
                                    
                                </div>
                                <span className="ml-10 text-[#878787]">{item?.date}</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="whitespace-pre-line min-h-20 pt-3 border-t-[1px] border-solid border-gray-300 text-lg">
                                {item?.description}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

                <style>
                    {`
                        .accordion{
                            border: none;
                        }   
                        .accordion__button{
                            background: none;
                            color: inhergit;
                            padding: 0;
                            position: relative;
                        }
                        .accordion__button:hover{
                            background: none;
                        }
                        .accordion__button:before{
                            position: absolute;
                            right: 0; top: 50%;
                            transform: translateY(-50%) rotate(45deg);
                        }
                        .accordion__button[aria-expanded='true']::before, .accordion__button[aria-selected='true']::before{
                            transform: translateY(-50%) rotate(-135deg);
                        }
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
                        .accordion__panel{
                            padding: 5px 20px 20px;
                        }
                        .icon svg {
                            height: 1rem;
                            width: 1rem;
                        }
                    `}
                </style>
            </Accordion>
        </div>
    )
}