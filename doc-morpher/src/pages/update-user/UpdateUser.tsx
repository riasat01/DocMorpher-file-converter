import { FormEvent, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import useAxiosSecure from "../../custom-hooks/use-axios-secure/useAxiosSecure";

type CurrentUser = {
    _id: string,
    name: string,
    email: string,
    photoURL: string,
    type: string,
}


const UpdateUser = () => {
    const {user} = useAuth();
    const [currentUser, setCurrentUser] = useState<CurrentUser>();
    const axiosSecure = useAxiosSecure();
    const handleUserUpdate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (e.target as any).name.value;
        const photo = (e.target as any).photo.value;
        const updatedUser = {
            name: name || currentUser?.name,
            photoURL: photo || currentUser?.photoURL
        }
        axiosSecure.put(`/user/update/${user?.email}`, updatedUser)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }
    useEffect(() => {
        axiosSecure.get(`/user/${user?.email}`)
        .then(res => {
            setCurrentUser(res?.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [axiosSecure, user?.email])
    return (
        <div className="bg-[#FFFFFF]">
            <div className="hero  min-h-screen bg-[#DEDDDE]">
                <div className="hero-content  w-full h-full">

                    <div className="card flex-col lg:flex-row rounded-l-none shadow-2xl bg-[#F5F4F6] border-[3px] border-[#FFFDFF]">
                        <div className="text-center lg:text-left">
                            <img src="https://i.ibb.co/z7xZyZb/timenew.png" className=" h-full " alt="" />
                        </div>
                        <form onSubmit={handleUserUpdate} className="card-body flex-shrink-0">

                            <h1 className="text-5xl font-bold">Update Info!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={currentUser?.name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" defaultValue={currentUser?.photoURL} className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div> */}
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control mt-6">
                                {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
                                <input type="submit" className="btn btn-primary" value="Update" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateUser;