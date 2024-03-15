import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { KakaoAuth } from "pages/KakaoAuth";
import { EggChoice } from "pages/EggChoice";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='home' element={<Home />} />

                    <Route path='login' element={<Login />} />
                </Route>
                <Route path="/login/auth" element={<KakaoAuth />} />
                <Route path="/egg-choice" element={<EggChoice />} />
            </Routes>
        </BrowserRouter>
    )
}