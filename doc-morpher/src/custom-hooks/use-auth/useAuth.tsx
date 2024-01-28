import { useContext } from "react";
import { UserContext, AuthInfo } from "../../provider/auth-provider/AuthProvider";
const useAuth = (): AuthInfo => {
  const auth = useContext(UserContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};

export default useAuth;
