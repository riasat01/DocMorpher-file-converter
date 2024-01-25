import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location?.state?.pathname);
    const { loggedinUser, createGoogleUser, createGithubUser, user } = useAuth();
    console.log(user)
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loggedinUser(email, password)
            .then((user) => {
                toast.success('Successfully Login!!');
                e.target.reset()
                navigate('/');
            })
            .catch((error) => {
                toast.error('Login failed');
            })
    }

    const handleGooglePopUp = () => {
        createGoogleUser()
            .then((result) => {
                toast('Successfully Login!!');
                navigate('/')
            })
            .catch((error) => {
                toast('Login failed');
                // console.log(error);
            })
    }
    const handleGithubPopUp = () => {
        createGithubUser()
            .then((result) => {
                toast.success('Successfully Login!!');
                // console.log('github login')
                navigate('/')
            })
            .catch((error) => {
                toast.error('Login failed');
                // console.log(error);
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
                                    {/* <button type="submit" className="btn btn-primary">Login</button>0 */}
                                    <input type="submit" className="btn btn-primary" value="Login" />
                                </div>
                                <div>
                                    <p>Dont have Account? <Link className="text-green-600 font-bold" to={'/signup'}>Create an Account</Link></p>
                                    <p>Or, continue with <button className="text-green-600 font-bold" onClick={handleGooglePopUp}>Google</button></p>
                                    <p>Or, continue with <button className="text-green-600 font-bold" onClick={handleGithubPopUp}>Github</button></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;