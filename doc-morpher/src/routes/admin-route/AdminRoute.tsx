import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../custom-hooks/use-auth/useAuth";
import { ReactNode } from "react";
// import PropTypes from "prop-types"
// import { useContext } from "react";
// import { UserAuth } from "../../authprovider/AuthProvider";
// import useAdmin from "../../custom-hooks/useAdmin";

const AdminRoute = ({ children }: { children: ReactNode }) => {
    // const { user, loading } = useContext(UserAuth);
    // const [isAdmin, isAdminLoading] = useAdmin();
    const { user } = useAuth();
    const location = useLocation();

    // if (loading || isAdminLoading) {
    //     return <p className="text-center text-lg font-bold font-comforta">loading...</p>
    // }

    // if (user && isAdmin) {
    //     return children;
    // }

    if (user?.email === 'admin@mail.com') {
        console.log(user?.email);
        return children;
    }

    return <Navigate to="/" state={location.pathname} replace></Navigate>

};

// AdminRoute.propTypes = {
//     children: PropTypes.object
// }

export default AdminRoute;