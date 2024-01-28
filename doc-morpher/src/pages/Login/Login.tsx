import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthInfo } from "../../provider/auth-provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { UserCredential } from "firebase/auth";
import { FaXTwitter } from "react-icons/fa6";
import { TwitterAuthProvider } from "firebase/auth/cordova";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location?.state?.pathname);
    const { loggedinUser, createGoogleUser, createGithubUser, createTwitterUser, user } = useAuth() as AuthInfo;
    console.log(user)
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as any).email.value;
        const password = (e.target as any).password.value;

        loggedinUser(email, password)
            .then((user) => {
                toast.success('Successfully Login!!');
                (e.target as any).reset()
                navigate('/');
                console.log(user);
            })
            .catch((error) => {
                toast.error('Login failed');
                console.log(error);
            })
    }

    const handlePopUp = (callback: () => Promise<UserCredential>) => {
        callback()
            .then((result) => {
                toast('Successfully Login!!');
                navigate('/')
                console.log(result);
            })
            .catch((error) => {
                toast('Login failed');
                console.log(error?.customData);
                console.log(TwitterAuthProvider.credentialFromError(error));
                console.log(error);
            })
    }
    // const handleGithubPopUp = () => {
    //     createGithubUser()
    //         .then((result) => {
    //             toast.success('Successfully Login!!');
    //             navigate('/');
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             toast.error('Login failed');
    //             console.log(error);
    //         })
    // }
    return (
        <div className="">
            <div className="bg-[#FFFFFF]">
                <div className="hero  min-h-screen bg-[#DEDDDE]">
                    <div className="hero-content  w-full h-full">

                        <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
                            <div className="text-center lg:text-left lg:w-1/2">
                                <img src="https://i.ibb.co/z7xZyZb/timenew.png" className="h-full " alt="" />
                            </div>
                            <section className="lg:w-1/2">
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
                                        {/* <button type="submit" className="btn btn-primary">Login</button>0 */}
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                                <div className="px-9">
                                    <p>Dont have Account? <Link className="text-green-600 font-bold" to={'/signup'}>Create an Account</Link></p>
                                    <fieldset className="border-t-2 my-4">
                                        <legend className="text-center text-gray-700 px-1">Or continue with</legend>
                                    </fieldset>
                                    <section className="flex gap-4 justify-center items-center text-3xl pb-6">
                                        <button onClick={() => handlePopUp(createGoogleUser)}><FcGoogle /></button>
                                        <button onClick={() => handlePopUp(createGithubUser)}><FaGithub /></button>
                                        <button onClick={() => handlePopUp(createTwitterUser)}><FaXTwitter /></button>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;