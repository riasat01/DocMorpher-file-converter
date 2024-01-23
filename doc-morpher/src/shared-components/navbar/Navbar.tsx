import logo1 from "../../assets/Navbar-logo/exchange.png"
import logo2 from "../../assets/Navbar-logo/simple-data-format.png"
import logo3 from "../../assets/Navbar-logo/user.png"
import logo4 from "../../assets/Navbar-logo/enter.png"
import logo5 from "../../assets/Navbar-logo/letter-d.png"
import logo6 from "../../assets/Navbar-logo/qr-code.png"
import logo7 from "../../assets/Navbar-logo/home.png"
import logo8 from "../../assets/Navbar-logo/userPerson.png"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const routes =
        <>
            <li>
                <NavLink to="/" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo7} alt="logo7" />
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/converter" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo1} alt="logo1" />
                    Converter</NavLink>
            </li>
            <li>
                <NavLink to="/fileFormat" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo2} alt="logo2" />
                    File Formate</NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo3} alt="logo3" />
                    About Us</NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo8} alt="logo8" />
                    Profile</NavLink>
            </li>
        </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10 backdrop-blur-sm bg-white/30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {routes}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost md:text-2xl p-0 m-0">
                    <img className="w-6 md:w-10 m-0 p-0" src={logo5} alt="logo5" />
                    ocMorpher</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {routes}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/qrCode" className="mr-2">
                    <img className="w-6" src={logo6} alt="logo6" />
                </Link>
                <Link to="/login" className="btn text-lg font-semibold">
                    <img className="w-6" src={logo4} alt="logo4" />
                    Login</Link>
            </div>
        </div>
    );
};

export default Navbar;