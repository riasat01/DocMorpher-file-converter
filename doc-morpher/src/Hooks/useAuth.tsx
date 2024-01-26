import { useContext } from "react";
import { userContext } from "../provider/auth-provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(userContext);
    return auth;
};

export default useAuth;