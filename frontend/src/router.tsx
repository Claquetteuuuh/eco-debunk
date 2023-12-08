import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import {SignIn} from "./components/pages/SignIn.tsx";
import {SignUp} from "./components/pages/SignUp.tsx";
import {Forum} from "./components/pages/Forum.tsx";
import { Menu } from "./components/Menu.tsx";

export const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Menu>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/sign-in" Component={SignIn} />
                    <Route path="/sign-up" Component={SignUp} />
                    <Route path="/forum" Component={Forum} />
                </Routes>
            </Menu>
        </BrowserRouter>
    )
}