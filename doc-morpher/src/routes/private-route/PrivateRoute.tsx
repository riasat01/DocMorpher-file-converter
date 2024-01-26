import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ReactNode } from "react";


const PrivateRoute = ({ children }: {children: ReactNode}) => {
  const auth = useAuth()!; //not-null assertion
  const { user, loader } = auth as { user: { email?: string } | null; loader: boolean };

  const location = useLocation();
  console.log(location);

  if (loader) {
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