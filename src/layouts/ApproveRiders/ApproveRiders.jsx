import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
           const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

  const updateRiderStatus = (rider, status) => {
    const updateInfo = {
        status,
        email: rider.email,
    };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
        .then((res) => {
            if (res.data.modifiedCount) {
                refetch();

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider has been ${status}.`,
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        })
        .catch((err) => {
            console.log(err);

            Swal.fire({
                icon: "error",
                title: "Failed!",
                text: "Something went wrong.",
            });
        });
};


const handleApproval = (rider) => {
    Swal.fire({
        title: "Approve Rider?",
        text: "Do you want to approve this rider?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#16a34a",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve"
    }).then((result) => {
        if (result.isConfirmed) {
            updateRiderStatus(rider, "approved");
        }
    });
};

const handleRejection = (rider) => {
    Swal.fire({
        title: "Reject Rider?",
        text: "Do you want to reject this rider?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Reject"
    }).then((result) => {
        if (result.isConfirmed) {
            updateRiderStatus(rider, "rejected");
        }
    });
};

    return (
        <div>
            <h2 className="text-5xl">Riders Pending Approval: {riders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <p className={`${rider.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleApproval(rider)} className='btn'>
                                        <FaUserCheck />
                                    </button>
                                    <button
                                        onClick={() => handleRejection(rider)}
                                        className='btn'>
                                        <IoPersonRemoveSharp />
                                    </button>
                                    <button className='btn'>
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

export default ApproveRiders;


