import {useNavigate} from 'react-router-dom';
import useAuth from './UseAuth';
import {useEffect} from 'react';

const AdminGuard = ({children}: any) => {
    const {isAuthenticated, user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated)
            navigate('/auth/login', {replace: true});
        if (!user.roles.includes("admin"))
            navigate('/', {replace: true});
    }, [isAuthenticated, navigate]);

    return children;
};

export default AdminGuard;
