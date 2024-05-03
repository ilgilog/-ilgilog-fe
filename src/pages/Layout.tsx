import { Header } from "components/layout/Header";
import React, { useEffect } from "react";
import { NavigateFunction, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Layout = () => {

    const navigate: NavigateFunction = useNavigate();
    const location: any = useLocation();

    // useEffect(() => {
    //     // 페이지 분기처리
    //     if(location.pathname === "/"){
    //         navigate("/index");
    //     }
    // }, [location, navigate]);

    return(
        <div className="flex flex-wrap justify-center">
            <Header />
            <div className="max-w-[1280px] min-w-[1280px] flex-1">
                <Outlet />
            </div>
        </div>
    )
}