import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const PrivateRouteClient = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const location = useLocation();
    

    React.useEffect(() => {
        const verifyToken = async () => {
            try {
             const res =   await axios.get('http://localhost:8080/api/v1/auth/client-verify', { withCredentials: true });
               if(res){ setIsAuthenticated(true);
                    console.log(res.data.user._id)
                    // Cookies.set('userId', res.data.user._id, { expires: 7 });
               }
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, []);

    if (loading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRouteClient;
