import React from 'react';
import UseRole from '../../../hooks/UseRole/UseRole';
import Loading from '../../../components/Loading';
import AdminDashboardHome from '../AdminDashboardHome';
import RiderDashboardHome from '../RiderDashboardHome';
import UserDashboardHome from '../UserDashboardHome';

const DashboardHome = () => {
	const {role,roleLoading} = UseRole();
	if(roleLoading){
		return <Loading/>
	}
	if(role === 'admin'){
		return <AdminDashboardHome/>
	}
	else if( role === 'rider'){
		return <RiderDashboardHome/>
	}
	else {
		return <UserDashboardHome/>
	}
   
};

export default DashboardHome;