import Home from "./components/pages/home";
import Login from "./components/pages/login";
import {Navigate} from "react-router-dom";

export const routes = [
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    }
]