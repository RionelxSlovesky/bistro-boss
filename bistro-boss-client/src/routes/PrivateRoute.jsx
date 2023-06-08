import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    return (
        <>
            {
                loading || (user ? children : <Navigate to="/" state={{from: location}} replace></Navigate>)
            }
        </>
    );
};

export default PrivateRoute;