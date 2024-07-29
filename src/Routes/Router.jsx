import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/BirthdayDesign/BirthdayDesign";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BirthdayDesign from "../Pages/BirthdayDesign/BirthdayDesign";
import ErrrorRoute from "./ErrrorRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrrorRoute></ErrrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/services.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/birthdaydesign",
                element: <PrivateRoute><BirthdayDesign></BirthdayDesign></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])


export default router;