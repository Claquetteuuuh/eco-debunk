import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
            </Routes>
        </BrowserRouter>
    )
}