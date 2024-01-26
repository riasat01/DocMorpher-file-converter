import { useContext } from "react";
import { UserContext } from "../../provider/auth-provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(UserContext);
    return auth;
};

export default useAuth;