import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/index.jsx";
import Layout from "../layouts";
import Login from "../pages/login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/home",
                element: <Home />
            },
            {
                path:"/login",
                element: <Login />
            }
        ]
    }
])


export default routes