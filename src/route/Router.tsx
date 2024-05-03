import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { KakaoAuth } from "pages/KakaoAuth";
import { EggChoice } from "pages/EggChoice";
import { MyInfo } from "pages/MyInfo";
import { Notice } from "pages/Notice";
import { Minime } from "pages/Minime";
import { Ranking } from "pages/Ranking";
import { Index } from "pages/Index";
import { HowToUse } from "pages/HowToUse";
import { Visit } from "pages/Visit";
import { AdminNotice } from "pages/AdminNotice";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Index />} />
                    <Route path='home' element={<Home />} />
                    <Route path='my' element={<MyInfo />} />
                    <Route path='notice' element={<Notice />} />
                    <Route path='minime' element={<Minime />} />
                    <Route path='rank' element={<Ranking />} />
                    <Route path='visit' element={<Visit />} />

                    <Route path='admin-notice' element={<AdminNotice />} />

                    <Route path='howtouse' element={<HowToUse />} />
                    <Route path='login' element={<Login />} />
                </Route>
                <Route path="/login/auth" element={<KakaoAuth />} />
                <Route path="/egg-choice" element={<EggChoice />} />
            </Routes>
        </BrowserRouter>
    )
}