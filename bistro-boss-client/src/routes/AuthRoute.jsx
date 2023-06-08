import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AuthRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    return (
        <>
            {
                loading || (user ? <Navigate to={from} replace></Navigate> : children)
            }
        </>
    );
};

export default AuthRoute;