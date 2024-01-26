import profileImage from "../../assets/images/shamim.jpg";
import SocialLinks from "./SocialLinks/SocialLinks";

const UserProfile = () => {
  return (
    <div className="bg-[#051F25] md:h-screen flex flex-col md:flex-row p-5">
      <div className="w-full md:w-1/4 md:border-r-4">
        <div className="w-full md:w-2/3 mx-auto md:border-b-4 pb-8">
          <img className="w-full rounded-full" src={profileImage} alt="" />
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
              <span>:</span> <span>John Doe</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Email:</span>
              <span>:</span> <span>abc@gmail.com</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Member Since:</span>
              <span>:</span> <span>10/10/23</span>
            </p>
            <p className="space-x-8 text-xl">
              <span>Membership:</span>
              <span>:</span> <span>Premium</span>
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
