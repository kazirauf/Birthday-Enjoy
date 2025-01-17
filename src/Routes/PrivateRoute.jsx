import { useContext } from "react";
import { Navigate,  } from "react-router-dom";
import { AuthContext } from "../Prividers/AuthProvider";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <div className="flex justify-center py-10"><span className="loading loading-spinner text-warning w-40"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate  to="/login"></Navigate>;
};


export default PrivateRoute;