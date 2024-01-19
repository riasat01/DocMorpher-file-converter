import { createBrowserRouter } from "react-router-dom";
import MainLayouot from "../../layouts/main-layout/MainLayouot";
import ErrorPage from "../../pages/error-page/ErrorPage";
import Home from "../../pages/home/Home";
import QrCode from "../../pages/qr-code/QrCode";
import Pdf from "../../pages/pdf/Pdf";
import Doc from "../../pages/doc/Doc";
import Ppt from "../../pages/ppt/Ppt";
import Image from "../../pages/image/Image";


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
                element: <Pdf />
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
            }
        ]
    }
])

export default MainRoute;