import logo1 from "../../assets/Navbar-logo/exchange.png"
import logo2 from "../../assets/Navbar-logo/simple-data-format.png"
import logo3 from "../../assets/Navbar-logo/user.png"
import logo4 from "../../assets/Navbar-logo/enter.png"
import logo5 from "../../assets/Navbar-logo/letter-d.png"

const Navbar = () => {
    const routes =
        <>
            <li>
                <a className="font-semibold md:text-lg">
                    <img className="w-6" src={logo1} alt="logo1" />
                    Converter</a>
            </li>
            <li>
                <a className="font-semibold md:text-lg">
                    <img className="w-6" src={logo2} alt="logo2" />
                    File Formate</a>
            </li>
            <li>
                <a className="font-semibold md:text-lg">
                    <img className="w-6" src={logo3} alt="logo3" />
                    About Us</a>
            </li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {routes}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-2xl p-0 m-0">
                    <img className="w-6 md:w-10 m-0 p-0" src={logo5} alt="logo5" />
                    ocMorpher</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {routes}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-lg font-semibold">
                    <img className="w-6" src={logo4} alt="logo4" />
                    Login</a>
            </div>
        </div>
    );
};

export default Navbar;