import { useContext } from "react";
import { AuthContext } from "../ContextApi/FirebaseAuthProvider";
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="w-16 text-red-400 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    
};

export default PrivateRoute;