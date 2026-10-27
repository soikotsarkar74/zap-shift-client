import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            console.log(res.data)
            return res.data;
        }
     })

    const handleParcelDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });

    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName,
            trackingId: parcel.trackingId
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

        console.log(res.data.url);
        window.location.assign(res.data.url);
    }

    return (
        <div>
            <h2>All of my parcels : {parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Tracking Id</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.paymentStatus === 'paid' ?
                                            <span className='text-green-400'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(parcel)} className="btn btn-sm btn-primary text-black">Pay</button>

                                    }
                                </td>
                                <td>
                                    <Link to={`/parcel-track/${parcel.trackingId}`}> {parcel.trackingId}</Link>
                                </td>
                                <td>{parcel.deliveryStatus}</td>
                                <td>
                                    
                                    <Link
                                        to={`/dashboard/parcel-details/${parcel._id}`}
                                        className="btn btn-square hover:bg-primary"
                                        title="View Parcel"
                                    >
                                        <FaMagnifyingGlass />
                                    </Link>
                                    <Link
                                        to={`/dashboard/update-parcel/${parcel._id}`}
                                        className="btn btn-square hover:bg-primary"
                                        title="Edit Parcel"
                                    >
                                        <FiEdit />
                                    </Link>
                                    <button
                                        onClick={() => handleParcelDelete(parcel._id)}
                                        className='btn btn-square hover:bg-primary'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;


// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAuth from '../../../hooks/useAuth';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { FiEdit } from 'react-icons/fi';
// import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router';

// const MyParcels = () => {

//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const {
//         data: parcels = [],
//         refetch,
//         isLoading,
//         isError
//     } = useQuery({
//         queryKey: ['my-parcels', user?.email],

//         enabled: !!user?.email,

//         queryFn: async () => {

//             const res = await axiosSecure.get(
//                 `/parcels?email=${user.email}`
//             );

//             console.log('Parcels API response:', res.data);

//             return Array.isArray(res.data)
//                 ? res.data
//                 : [];
//         }
//     });


//     const handleParcelDelete = id => {

//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {

//             if (result.isConfirmed) {

//                 axiosSecure.delete(`/parcels/${id}`)
//                     .then(res => {

//                         if (res.data.deletedCount) {

//                             refetch();

//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your parcel request has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//                     .catch(error => {

//                         console.error(
//                             'Delete parcel error:',
//                             error
//                         );

//                         Swal.fire({
//                             title: "Error!",
//                             text: "Failed to delete parcel.",
//                             icon: "error"
//                         });
//                     });
//             }
//         });
//     };


//     const handlePayment = async (parcel) => {

//         try {

//             const paymentInfo = {
//                 cost: parcel.cost,
//                 parcelId: parcel._id,
//                 senderEmail: parcel.senderEmail,
//                 parcelName: parcel.parcelName,
//                 trackingId: parcel.trackingId
//             };

//             console.log('Payment info:', paymentInfo);

//             const res = await axiosSecure.post(
//                 '/create-checkout-session',
//                 paymentInfo
//             );

//             console.log('Stripe response:', res.data);

//             if (res.data?.url) {

//                 window.location.assign(res.data.url);

//             } else {

//                 Swal.fire({
//                     title: "Payment Error",
//                     text: "Stripe checkout URL was not created.",
//                     icon: "error"
//                 });
//             }

//         } catch (error) {

//             console.error(
//                 'Payment error:',
//                 error.response?.data || error
//             );

//             Swal.fire({
//                 title: "Payment Failed",
//                 text:
//                     error.response?.data?.message ||
//                     "Something went wrong while starting payment.",
//                 icon: "error"
//             });
//         }
//     };


//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center py-20">
//                 <span className="loading loading-spinner loading-lg"></span>
//             </div>
//         );
//     }


//     if (isError) {
//         return (
//             <div className="text-center py-20">

//                 <h2 className="text-2xl font-bold text-error">
//                     Failed to load parcels
//                 </h2>

//                 <p className="mt-2">
//                     Please try again.
//                 </p>

//             </div>
//         );
//     }


//     return (
//         <div className="p-4">

//             <h2 className="text-2xl font-bold mb-6">
//                 All of my parcels : {parcels.length}
//             </h2>

//             <div className="overflow-x-auto">

//                 <table className="table table-zebra">

//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Cost</th>
//                             <th>Payment</th>
//                             <th>Tracking Id</th>
//                             <th>Delivery Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>

//                     <tbody>

//                         {parcels.length === 0 ? (

//                             <tr>
//                                 <td
//                                     colSpan="7"
//                                     className="text-center py-10"
//                                 >
//                                     No parcels found.
//                                 </td>
//                             </tr>

//                         ) : (

//                             parcels.map((parcel, index) => (

//                                 <tr key={parcel._id}>

//                                     <th>
//                                         {index + 1}
//                                     </th>

//                                     <td>
//                                         {parcel.parcelName}
//                                     </td>

//                                     <td>
//                                         ৳{parcel.cost}
//                                     </td>

//                                     <td>

//                                         {parcel.paymentStatus === 'paid' ? (

//                                             <span className="text-green-500 font-semibold">
//                                                 Paid
//                                             </span>

//                                         ) : (

//                                             <button
//                                                 onClick={() =>
//                                                     handlePayment(parcel)
//                                                 }
//                                                 className="btn btn-sm btn-primary"
//                                             >
//                                                 Pay
//                                             </button>

//                                         )}

//                                     </td>

//                                     <td>

//                                         <Link
//                                             to={`/parcel-track/${parcel.trackingId}`}
//                                             className="link link-primary"
//                                         >
//                                             {parcel.trackingId}
//                                         </Link>

//                                     </td>

//                                     <td>
//                                         {parcel.deliveryStatus}
//                                     </td>

//                                     <td>

//                                         <div className="flex gap-2">

//                                             <Link
//                                                 to={`/dashboard/parcel-details/${parcel._id}`}
//                                                 className="btn btn-square hover:bg-primary"
//                                                 title="View Parcel"
//                                             >
//                                                 <FaMagnifyingGlass />
//                                             </Link>

//                                             <Link
//                                                 to={`/dashboard/update-parcel/${parcel._id}`}
//                                                 className="btn btn-square hover:bg-primary"
//                                                 title="Edit Parcel"
//                                             >
//                                                 <FiEdit />
//                                             </Link>

//                                             <button
//                                                 onClick={() =>
//                                                     handleParcelDelete(
//                                                         parcel._id
//                                                     )
//                                                 }
//                                                 className="btn btn-square hover:bg-primary"
//                                                 title="Delete Parcel"
//                                             >
//                                                 <FaTrashCan />
//                                             </button>

//                                         </div>

//                                     </td>

//                                 </tr>

//                             ))
//                         )}

//                     </tbody>

//                 </table>

//             </div>

//         </div>
//     );
// };

// export default MyParcels;