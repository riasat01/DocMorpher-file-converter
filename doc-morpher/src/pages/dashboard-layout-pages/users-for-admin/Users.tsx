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
        <div>
            {
                users?.map(user => <div key={user?._id} className="grid grid-cols-4 gap-4">
                    <div><img src={user?.name} alt="user image" /></div>
                    <div><p>{user?.name}</p></div>
                    <div><p>{user?.email}</p></div>
                    <div><p>{user?.type}</p></div>
                </div>)
            }
        </div>
    );
};

export default Users;