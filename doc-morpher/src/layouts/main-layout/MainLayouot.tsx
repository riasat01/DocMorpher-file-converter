import { Outlet } from "react-router-dom";
import Footer from "../../shared-components/footer/Footer";
import Navbar from "../../shared-components/navbar/Navbar";


const MainLayouot = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouot;