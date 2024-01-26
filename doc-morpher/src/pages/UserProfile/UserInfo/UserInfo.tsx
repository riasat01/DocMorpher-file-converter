
const UserInfo = () => {
    return(
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
    );
}
export default UserInfo;