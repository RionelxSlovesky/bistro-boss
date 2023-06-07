import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    return (
        <>
            {
                loading || (user ? children : <Navigate to="/"></Navigate>)
            }
        </>
    );
};

export default PrivateRoute;