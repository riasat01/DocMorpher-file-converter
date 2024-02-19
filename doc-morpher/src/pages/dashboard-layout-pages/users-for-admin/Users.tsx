import { useEffect, useState } from "react";
import useAxiosSecure from "../../../custom-hooks/use-axios-secure/useAxiosSecure";

interface UsersInterface {
    _id: string,
    name: string,
    email: string,
    photoURL: string,
    type: string
}

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState<UsersInterface[]>([])
    useEffect(() => {
        axiosSecure.get('/user')
        .then(res => {
            console.log(res?.data);
            setUsers(res?.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [axiosSecure])
    return (
        <div className="m-4 space-y-4">
            <section className="grid grid-cols-4 gap-4">
                <div className="font-bold">Photo</div>
                <div className="font-bold">Name</div>
                <div className="font-bold">Email</div>
                <div className="font-bold">Type</div>
            </section>
            {
                users?.map(user => <div key={user?._id} className="grid grid-cols-4 gap-4">
                    <div><img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="user image" /></div>
                    <div><p>{user?.name}</p></div>
                    <div><p>{user?.email}</p></div>
                    <div><p>{user?.type}</p></div>
                </div>)
            }
        </div>
    );
};

export default Users;