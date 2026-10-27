import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import MyParcels from "../pages/Dashoard/MyParcels/MyParcels";
import ViewParcel from "../pages/ViewParcel/ViewParcel";
import Payment from "../pages/Dashoard/Payment/Payment";
import PaymentSuccess from "../pages/Dashoard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashoard/Payment/PaymentCancel";
import PaymentHistory from "../pages/Dashoard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../layouts/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashoard/UsersManagement/UsersManagement";
import UseRole from "../hooks/UseRole/UseRole";
import AdminRouter from "./AdminRouter";
import AssignRiders from "../pages/Dashoard/AssignRiders/AssignRiders";
import AssignedDeliveries from "../pages/Dashoard/AssignedDeliveries/AssignedDeliveries";
import RiderRoute from "./RiderRoute";
import CompletedDeliveries from "../pages/Dashoard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/Dashoard/DashboardHome/DashboardHome";
import About from "../components/About/About";
import UpdateParcel from "../pages/Dashoard/UpdateParcel/UpdateParcel";
import ParcelDetails from "../pages/Dashoard/ParcelDetails/ParcelDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:'about',
        element:<About/>
      },
       {
        path: 'rider',
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch('/serviceCenters.json').then(res => res.json())
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: async () => {
          const res = await fetch("/serviceCenters.json");
          return res.json();
        },
      },
      {
        path: 'send-parcel',
        element: <PrivateRoute><SendParcel /></PrivateRoute>,
        loader: async () => {
          const res = await fetch("/serviceCenters.json");
          return res.json();
        },
      },
      {
        path: 'parcel-track/:trackingId', 
        element: <ParcelTrack/>
      },
     
{
    path: '/dashboard/parcel-details/:id',
    element: <ParcelDetails />
},
      

        {
    path: '/dashboard/update-parcel/:id',
    element: <UpdateParcel />
},

      {
        path: '/',
        element: <AuthLayout></AuthLayout >,
        children: [
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          }
        ]
      }
    ]
  },
  {
  path:'dashboard',
  element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
  children:[
    {
      index:true,
      element:<DashboardHome/>
      
    },
    
    {
      path:'assigned-deliveries',
      element:
      <RiderRoute>
        <AssignedDeliveries/>
      </RiderRoute>
    },
    {
      path:'completed-deliveries',
      element:
      <RiderRoute>
        <CompletedDeliveries/>
      </RiderRoute>
    }
  ]
},


  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-parcels',
        element: <MyParcels />
      },
      {
        path: "parcels/:id",
        element: <ViewParcel />,
      },
      {
        path: 'payment/:parcelId',
        element: <Payment />

      },
      {

        path: "/dashboard/payment-success",
        element: <PaymentSuccess />,

      },
      {
        path: "/dashboard/payment-cancel",
        element: <PaymentCancel />,
      },
    
   
      // admin related routes
       {
        path: "/dashboard/assign-riders",
        element: <AssignRiders />,
      },
       {
        path: "/dashboard/approve-riders",
        element:
        <AdminRouter>
          <ApproveRiders />
          </AdminRouter>,
      },
      {
        path: '/dashboard/payment-history',
        element: <PaymentHistory />
      },
      {
        path: '/dashboard/users-management',
        element:
         <AdminRouter>
         <UsersManagement />
         </AdminRouter>
      },
    
    ]
  }
]);


