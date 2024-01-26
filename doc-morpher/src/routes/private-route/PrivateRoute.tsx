import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../../provider/auth-provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return (
    // <Navigate state={{ from: location }} to="/login" replace></Navigate>
    <Navigate state={location.pathname} to="/login" replace></Navigate>
  );
};

export default PrivateRoute;