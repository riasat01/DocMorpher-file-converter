import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthInfo } from "../../provider/auth-provider/AuthProvider";
import useAxiosPublic from "../../custom-hooks/use-axios-public/useAxiosPublic";

const SignUp = () => {
    const navigate = useNavigate();
    const auth = useAuth() as AuthInfo;
    const { createEmailPasswordUser, setUserInfo, setLoader } = auth || {};
    const axiosPublic = useAxiosPublic();

    // handle user registration
    const handleRegitration = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (e.target as any).name.value;
        const photo = (e.target as any).photo.value;
        const email = (e.target as any).email.value;
        const password = (e.target as any).password.value;

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
                setUserInfo(name, photo)
                    .then(() => {
                        const user = {
                            name: name,
                            email: email,
                            photoURL: photo,
                            type: 'normal'
                        }
                        axiosPublic.post('/user', user)
                        .then( result => {
                            console.log(result);
                            toast.success('Successfully Signed up!!');
                            (e.target as any).reset();
                            navigate('/');
                            setLoader(false);
                        })
                        setLoader(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setLoader(false);
                    })
            })
            .catch(error => {
                console.log(error);
                setLoader(false);
            })

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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
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
                                <input type="submit" className="btn btn-primary" value="Sign Up" />
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