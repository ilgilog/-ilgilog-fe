import { Header } from "components/layout/Header";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {

    let navigate = useNavigate();

    useEffect(() => {
        // 페이지 분기처리
        navigate("/home");
    }, [navigate]);

    return(
        <div className="flex flex-wrap justify-center">
            <Header />
            <div className="max-w-[1280px] min-w-[1280px] flex-1">
                <Outlet />
            </div>
        </div>
    )
}