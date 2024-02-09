// import logo1 from "../../assets/Navbar-logo/exchange.png"
import logo2 from "../../assets/Navbar-logo/simple-data-format.png"
import logo3 from "../../assets/Navbar-logo/user.png"
import logo4 from "../../assets/Navbar-logo/enter.png"
import logo5 from "../../assets/Navbar-logo/letter-d.png"
import logo6 from "../../assets/Navbar-logo/qr-code.png"
import logo7 from "../../assets/Navbar-logo/home.png"
import logo8 from "../../assets/Navbar-logo/userPerson.png"
import { Link, NavLink } from "react-router-dom"
import useAuth from "../../custom-hooks/use-auth/useAuth"

const Navbar = () => {
    const {user, loader, logOut, setLoader} = useAuth();

    const handleSignOut = () => {
        logOut()
        .then(res => {
            setLoader(false);
            console.log(res);
        })
        .catch(error => {
            setLoader(false);
            console.log(error);
        })
    }
    const routes =
        <>
            <li>
                <NavLink to="/" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo7} alt="logo7" />
                    Home</NavLink>
            </li>
            {/* <li>
                <NavLink to="/converter" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo1} alt="logo1" />
                    Converter</NavLink>
            </li>
            <li>
                <NavLink to="/fileFormat" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo2} alt="logo2" />
                    File Format</NavLink>
            </li> */}
            <li>
                <NavLink to="/pricing" className="font-semibold md:text-lg">
                    <img className="w-6" src={logo2} alt="logo2" />
                    Pricing</NavLink>
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
                <section className=' hidden md:block'>
                    {
                        loader ?
                        <p className='text-white animate-pulse'>loading...</p>
                            :
                            user?.email ?
                                <section className="flex gap-6 items-center">
                                    <details className="relative">
                                        <summary className="p-0 bg-transparent hover:bg-transparent border-0">
                                            {
                                                user?.photoURL ?
                                                    <img className="h-14 w-14 rounded-full" src={user?.photoURL} alt={`image of ${user.displayName}`} />
                                                    :
                                                    <div className="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center">
                                                        <span className="text-xl font-medium">{user?.displayName?.charAt(0)}</span>
                                                    </div>
                                            }
                                        </summary>
                                        <ul className="absolute right-0 mt-2 p-2 w-52 bg-white border rounded shadow-md">
                                            <li><p className="text-gray-900">{user.displayName}</p></li>
                                            <li>
                                                <button onClick={handleSignOut} className='w-full px-4 py-2 mt-2 text-lg font-semibold text-white rounded bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'>
                                                    Log Out
                                                </button>
                                            </li>
                                        </ul>
                                    </details>

                                </section>
                                :
                                <Link to="/login" className="btn text-lg font-semibold">
                                <img className="w-6" src={logo4} alt="logo4" />
                                Login</Link>
                    }
                </section>
                
            </div>
        </div>
    );
};

export default Navbar;