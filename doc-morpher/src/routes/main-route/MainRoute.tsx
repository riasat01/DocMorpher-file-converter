import { createBrowserRouter } from "react-router-dom";
import MainLayouot from "../../layouts/main-layout/MainLayouot";
import ErrorPage from "../../pages/error-page/ErrorPage";
import Home from "../../pages/home/Home";
import QrCode from "../../pages/qr-code/QrCode";

import Doc from "../../pages/doc/Doc";
import Ppt from "../../pages/ppt/Ppt";
import Image from "../../pages/image/Image";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AboutUs from "../../pages/aboutUs/AboutUs";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Pricing from "../../pages/Pricing/Pricing/Pricing";
import Payment from "../../pages/Payment/Payment/Payment";
import Dashboard from "../../layouts/dashboard/Dashboard";
import Users from "../../pages/dashboard-layout-pages/users-for-admin/Users";
import AdminRoute from "../admin-route/AdminRoute";
import Pdf from "../../pages/pdf/Pdf";
// import Pdf from './../../pages/pdf/Pdf';
import Pdf from './../../pages/pdf/Pdf';
import UpdateUser from "../../pages/update-user/UpdateUser";



const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/qrCode',
                element: <QrCode/>
            },
        
            {
                path: '/pdf',
                element: <Pdf/>
            },
            {
                path: '/doc',
                element: <Doc />
            },
            {
                path: '/ppt',
                element: <Ppt />
            },
            {
                path: '/image',
                element: <Image />
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/aboutUs',
                element: <AboutUs/>
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/payment/:price',
                element: <Payment />
            },
            {
                path: '/update-user',
                element: <UpdateUser />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/users',
                // element: <AdminRoute><Users /></AdminRoute>
                element: <Users />
            }
        ]
    }
])

export default MainRoute;