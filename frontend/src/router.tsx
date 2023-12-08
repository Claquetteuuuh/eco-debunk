import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import {SignIn} from "./components/pages/SignIn.tsx";
import {SignUp} from "./components/pages/SignUp.tsx";

export const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/sign-in" Component={SignIn} />
                <Route path="/sign-up" Component={SignUp} />
            </Routes>
        </BrowserRouter>
    )
}