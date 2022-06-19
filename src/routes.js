import Home from "./components/pages/home";
import Login from "./components/pages/login";

export const routes = [
    {
        path: "/login",
        element: <Login />,
        exact: false
    },
    {
        path: "/",
        element: <Home />,
        exact: true
    }
]