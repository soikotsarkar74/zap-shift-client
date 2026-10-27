// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../hooks/useAuth';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const CompletedDeliveries = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: parcels = [], } = useQuery({
//         queryKey: ['parcels', user.email, 'driver_assigned'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`)

//             return res.data;
//         }
//     })

//     const calculatePayout = parcel => {
//         if (parcel.senderDistrict === parcel.receiverDistrict) {
//             return parcel.cost * 0.8
//         }
//         else{
//             return parcel.cost * 0.6;
//         }
//     }

//     return (
//         <div>
//             <h2 className='text-4xl'>Completed Deliveries: {parcels.length}</h2>
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Created At</th>
//                             <th>Pickup District</th>
//                             <th>Cost</th>
//                             <th>Payout</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parcels.map((parcel, index) => <tr key={parcel._id}>
//                             <th>{index + 1}</th>
//                             <td>{parcel.parcelName}</td>
//                             <td>{parcel.createdAt}</td>
//                             <td>{parcel.senderDistrict}</td>
//                             <td>{parcel.cost}</td>
//                             <td>{calculatePayout(parcel)}</td>
//                             <td>
//                                 <button

//                                     className='btn btn-primary text-black'>Cash out</button>
//                             </td>
//                         </tr>)}

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CompletedDeliveries;


import React from 'react';
import {
    useMutation,
    useQuery,
    useQueryClient
} from '@tanstack/react-query';

import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

import Swal from 'sweetalert2';

const CompletedDeliveries = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const {
        data: parcels = [],
        isLoading
    } = useQuery({
        queryKey: ['parcels', user?.email, 'parcel_delivered'],

        enabled: !!user?.email,

        queryFn: async () => {

            const res = await axiosSecure.get(
                `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
            );

            return res.data;
        }
    });


    // Calculate rider payout
    const calculatePayout = (parcel) => {

        if (
            parcel.senderDistrict ===
            parcel.receiverDistrict
        ) {
            return parcel.cost * 0.8;
        }

        return parcel.cost * 0.6;
    };


    // Cash out mutation
    const cashOutMutation = useMutation({

        mutationFn: async ({ parcelId, payout }) => {

            const res = await axiosSecure.patch(
                `/riders/cashout/${parcelId}`,
                {
                    riderEmail: user.email,
                    payout: payout
                }
            );

            return res.data;
        },


        onSuccess: (data) => {

            queryClient.invalidateQueries({
                queryKey: [
                    'parcels',
                    user.email,
                    'parcel_delivered'
                ]
            });

            Swal.fire({
                icon: 'success',
                title: 'Cash Out Successful',
                text: data.message,
                confirmButtonText: 'OK'
            });
        },


        onError: (error) => {

            Swal.fire({
                icon: 'error',
                title: 'Cash Out Failed',
                text:
                    error?.response?.data?.message ||
                    'Something went wrong'
            });
        }
    });


    // Cash out button
    const handleCashOut = (parcel) => {

        const payout = calculatePayout(parcel);

        Swal.fire({
            title: 'Are you sure?',
            text: `You will receive ৳${payout.toFixed(2)}`,
            icon: 'question',

            showCancelButton: true,

            confirmButtonText: 'Yes, Cash Out',
            cancelButtonText: 'Cancel'
        }).then((result) => {

            if (result.isConfirmed) {

                cashOutMutation.mutate({
                    parcelId: parcel._id,
                    payout: payout
                });

            }

        });
    };


    if (isLoading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }


    return (

        <div>

            <h2 className="mb-6 text-4xl font-bold">
                Completed Deliveries: {parcels.length}
            </h2>


            <div className="overflow-x-auto">

                <table className="table table-zebra">

                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Name</th>

                            <th>Created At</th>

                            <th>Pickup District</th>

                            <th>Cost</th>

                            <th>Payout</th>

                            <th>Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        {parcels.map((parcel, index) => {

                            const payout =
                                calculatePayout(parcel);

                            const isCashedOut =
                                parcel.payoutStatus ===
                                'cashed_out';

                            return (

                                <tr key={parcel._id}>

                                    <th>
                                        {index + 1}
                                    </th>


                                    <td>
                                        {parcel.parcelName}
                                    </td>


                                    <td>
                                        {parcel.createdAt
                                            ? new Date(
                                                parcel.createdAt
                                            ).toLocaleDateString()
                                            : 'N/A'}
                                    </td>


                                    <td>
                                        {parcel.senderDistrict}
                                    </td>


                                    <td>
                                        ৳{parcel.cost}
                                    </td>


                                    <td className="font-semibold">
                                        ৳{payout.toFixed(2)}
                                    </td>


                                    <td>

                                        {isCashedOut ? (

                                            <button
                                                disabled
                                                className="btn btn-success btn-sm text-white"
                                            >
                                                Cashed Out
                                            </button>

                                        ) : (

                                            <button
                                                onClick={() =>
                                                    handleCashOut(parcel)
                                                }

                                                disabled={
                                                    cashOutMutation.isPending
                                                }

                                                className="btn btn-primary btn-sm"
                                            >

                                                {cashOutMutation.isPending
                                                    ? (
                                                        <>
                                                            <span className="loading loading-spinner loading-xs"></span>
                                                            Processing...
                                                        </>
                                                    )
                                                    : (
                                                        'Cash Out'
                                                    )}

                                            </button>

                                        )}

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default CompletedDeliveries;
