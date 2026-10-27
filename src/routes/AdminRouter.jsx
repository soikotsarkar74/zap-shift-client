import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading';
import UseRole from '../hooks/UseRole/UseRole';
import Forbidden from '../components/Forbidden';
// const AdminRouter = ({ Children }) => {
// 	const {user,loading} = useAuth();
// 	const {role,roleLoading} = UseRole();
// 	if(loading || roleLoading){
// 		return  <Loading/>
// 	}
// 	if(role !== 'admin'){
// 		return <Forbidden/>
// 	}
// 	return Children;
// };

// export default AdminRouter;

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = UseRole();

    if (loading || roleLoading) {
        return <Loading />;
    }

    if (role !== 'admin') {
        return <Forbidden />;
    }

    return children;
};

export default AdminRouter;

// import useAuth from '../hooks/useAuth';
// import Loading from '../components/Loading';
// import UseRole from '../hooks/UseRole/UseRole';
// import Forbidden from '../components/Forbidden';

// const AdminRouter = ({ children }) => {
//     const { user, loading } = useAuth();
//     const { role, roleLoading } = UseRole();

//     if (loading || roleLoading) {
//         return <Loading />;
//     }

//     if (!user) {
//         return <Forbidden />;
//     }

//     if (role !== 'admin') {
//         return <Forbidden />;
//     }

//     return children;
// };

// export default AdminRouter;