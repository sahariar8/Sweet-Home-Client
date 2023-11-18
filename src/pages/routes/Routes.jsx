import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layout/LayOut";
import Error from "../shared/Error";
import Home from "../Home/Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";



 export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<SignIn></SignIn>
            },
            {
                path:'register',
                element:<SignUp></SignUp>
            },
        ]
    }
  ])

