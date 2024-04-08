import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Updateprofile from "../pages/Updateprofile";
import Profile from "../pages/Profile";
import Login from "../coponents/Login";
import Register from "../coponents/Register";
import Details from "../pages/Details";
import PrivateRoute from "../coponents/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
           
            {
                path: '/update-profile',
                element:<Updateprofile></Updateprofile>
            },
            {
                path: '/profile',
                element:<Profile></Profile>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },

            {
                path: '/property/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('../data.json')
            }
            
        ]
    },
]);