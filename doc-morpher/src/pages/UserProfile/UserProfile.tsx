import { useEffect, useState } from "react";
// import profileImage from "../../assets/images/shamim.jpg";
import useAxiosSecure from "../../custom-hooks/use-axios-secure/useAxiosSecure";
import SocialLinks from "./SocialLinks/SocialLinks";
import useAuth from "../../custom-hooks/use-auth/useAuth";

interface UserInfoInterface {
  name: string,
  email: string,
  photoURL: string,
  type: string
}

const defaultInfo : UserInfoInterface = {
  name: '',
  email: '',
  photoURL: '',
  type: ''
}

const UserProfile = () => {
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUserInfo] = useState(defaultInfo)
  const {user} = useAuth();
  useEffect(() => {
    console.log(user?.email);
    axiosSecure.get(`/user/${user?.email}`)
    .then(res => {
      console.log(res?.data);
      setUserInfo(res?.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, [user?.email])
  return (
    <div className="bg-[#051F25] md:h-screen flex flex-col md:flex-row p-5">
      <div className="w-full md:w-1/4 md:border-r-4">
        <div className="w-full md:w-2/3 mx-auto md:border-b-4 pb-8">
          <img className="w-full rounded-full" src={userInfo?.photoURL} alt="" />
        </div>
        <div className="flex justify-center gap-8 mt-6">
          <SocialLinks />
        </div>
      </div>
      <div className="w-full md:w-3/4 md:p-8 text-white">
        <div className="flex flex-col items-center">
          <div className="p-5 md:p-6 space-y-6">
            <p className="space-x-8 text-xl">
              <span>Name</span>
              <span>:</span> <span>{userInfo?.name}</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Email:</span>
              <span>:</span> <span>{userInfo?.email}</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Member Since:</span>
              <span>:</span> <span>10/10/23</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Membership:</span>
              <span>:</span> <span>{userInfo?.type}</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#5EF8DC] text-black font-bold px-4 py-2 rounded-md">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
