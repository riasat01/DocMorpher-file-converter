import logo1 from "../../assets/Navbar-logo/letter-d.png"
import logo2 from "../../assets/Navbar-logo/twitter.png"
import logo3 from "../../assets/Navbar-logo/youtube.png"
import logo4 from "../../assets/Navbar-logo/facebook.png"

const Footer = () => {
    return (
        <><footer className="footer p-10 bg-base-100 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer><footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    
                    <p className="flex items-center">Copyright © 2024 - All right reserved by <a className="mx-1 btn btn-ghost md:text-2xl p-0 m-0">
                        <img className="w-6 m-0 p-0" src={logo1} alt="logo1" />
                        ocMorpher</a> Industries Ltd</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <img className="w-8" src={logo2} alt="logo2" />
                        <img className="w-8" src={logo3} alt="logo3" />
                        <img className="w-8" src={logo4} alt="logo4" />
                    </div>
                </nav>
            </footer></>
    );
};

export default Footer;