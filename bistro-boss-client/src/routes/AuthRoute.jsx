import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const AuthRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    return (
        <>
            {
                loading || (user ? <Navigate to="/"></Navigate> : children)
            }
        </>
    );
};

export default AuthRoute;