import React from 'react';
import Loading from '../components/Loading';
import UseRole from '../hooks/UseRole/UseRole';
import useAuth from '../hooks/useAuth';
import Forbidden from '../components/Forbidden';
const RiderRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = UseRole();

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'rider') {
        return <Forbidden/>
    }

    return children;
};

export default RiderRoute;