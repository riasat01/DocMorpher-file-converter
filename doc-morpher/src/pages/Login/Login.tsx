import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { userContext } from "../../provider/auth-provider/AuthProvider";
import { collectionGroup } from "firebase/firestore";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location?.state?.pathname);
    const { loggedinUser, createGoogleUser,createGithubUser, user } = useContext(userContext);
console.log(user)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()

        if (password < 6) {
            return toast.error('At least 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('At least 1 capital letter');
        }
        else if (!/[!S#$%&?]/.test(password)) {
            return toast.error('At least 1 special character');
        }
        else if (!/[0-9]/.test(password)) {
            return toast.error('At least 1 numeric character');
        }

        loggedinUser(email, password)
            .then((user) => {
                toast.success('Successfully Login!!');
                navigate('/')
            })
            .then((error) => {
                toast.success('not login');
            })
    }

    const handleGooglePopUp = () => {
        createGoogleUser()
            .then((result) => {
               toast.success('Successfully Login!!');
                navigate('/')
            })
            .then((error) => {
                console.log(error);
            })
    }
    const handleGithubPopUp = () => {
        createGithubUser()
            .then((result) => {
               toast.success('Successfully Login!!');
                console.log('github login')
                navigate('/')
            })
            .then((error) => {
                console.log(error);
            })
    }
    return (
        <div className="">
            <div className="bg-[#FFFFFF]">
                <div className="hero  min-h-screen bg-[#DEDDDE]">
                    <div className="hero-content  w-full h-full">

                        <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
                            <div className="text-center lg:text-left">
                                <img src="https://i.ibb.co/z7xZyZb/timenew.png" className=" h-full " alt="" />
                            </div>
                            <form onSubmit={handleLogin} className="card-body flex-shrink-0">

                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div>
                                    <p>Dont have Account? <Link className="text-green-600 font-bold" to={'/signup'}>Create an Account</Link></p>
                                    <p>Or, continue with <Link className="text-green-600 font-bold" onClick={handleGooglePopUp}>Google</Link></p>
                                    <p>Or, continue with <Link className="text-green-600 font-bold" onClick={handleGithubPopUp}>Github</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;