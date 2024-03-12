import { Layout } from "pages/Layout";
import { Home } from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout  />}>
                    <Route path='home' element={<Home />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}