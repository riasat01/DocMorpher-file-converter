import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
    const navigate = useNavigate();
    const { createEmailPasswordUser, user } = useAuth();
    console.log(user);
    const handleRegitration = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password);
        // password validation
        if (password < 6) {
            console.log('e1');
            return toast('At least 6 characters');
        }
        else if (!/[A-Z]/.test(password)) {
            console.log('e2');
            return toast('At least 1 capital letter');
        }
        else if (!/[@!S#$%&?]/.test(password)) {
            console.log('e3');
            return toast('At least 1 special character');
        }
        else if (!/[0-9]/.test(password)) {
            console.log('e4');
            return toast('At least 1 numeric character');
        }

        createEmailPasswordUser(email, password)
            .then(() => {
                toast.success('Successfully Login!!');
                e.target.reset();
                navigate('/')
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="bg-[#FFFFFF]">
            <div className="hero  min-h-screen bg-[#DEDDDE]">
                <div className="hero-content  w-full h-full">

                    <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
                        <div className="text-center lg:text-left">
                            <img src="https://i.ibb.co/z7xZyZb/timenew.png" className=" h-full " alt="" />
                        </div>
                        <form onSubmit={handleRegitration} className="card-body flex-shrink-0">

                            <h1 className="text-5xl font-bold">Registration now!</h1>
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
                            </div>
                            <div className="form-control mt-6">
                                {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
                                <input type="submit"className="btn btn-primary" value="Sign Up" />
                            </div>
                            <div>
                                <p>Already have a Account? <Link className="text-green-600 font-bold" to={'/login'}>Login!</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;