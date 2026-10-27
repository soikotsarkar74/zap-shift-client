import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateParcel = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const {
        data: parcel = {},
        isLoading
    } = useQuery({
        queryKey: ['update-parcel', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`);
            return res.data;
        },
        enabled: !!id
    });


    const handleUpdateParcel = async (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedParcel = {
            parcelName: form.parcelName.value,
            parcelType: form.parcelType.value,
            parcelWeight: Number(form.parcelWeight.value),

            receiverName: form.receiverName.value,
            receiverPhone: form.receiverPhone.value,
            receiverRegion: form.receiverRegion.value,
            receiverDistrict: form.receiverDistrict.value,
            receiverAddress: form.receiverAddress.value
        };

        try {

            const res = await axiosSecure.patch(
                `/parcels/${id}/update`,
                updatedParcel
            );

            if (res.data.modifiedCount > 0) {

                Swal.fire({
                    title: 'Updated!',
                    text: 'Parcel updated successfully.',
                    icon: 'success'
                });

                navigate(`/dashboard/parcel-details/${id}`);
            }

        } catch (error) {

            console.error(error);

            Swal.fire({
                title: 'Error!',
                text: 'Failed to update parcel.',
                icon: 'error'
            });
        }
    };


    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }


    return (
        <div className="p-4 max-w-5xl mx-auto">

            <h2 className="text-3xl font-bold mb-6">
                Update Parcel
            </h2>


            <form
                onSubmit={handleUpdateParcel}
                className="grid md:grid-cols-2 gap-5"
            >

                {/* Parcel Name */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Parcel Name
                        </span>
                    </label>

                    <input
                        type="text"
                        name="parcelName"
                        defaultValue={parcel.parcelName}
                        className="input input-bordered w-full"
                        required
                    />
                </div>


                {/* Parcel Type */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Parcel Type
                        </span>
                    </label>

                    <select
                        name="parcelType"
                        defaultValue={parcel.parcelType}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="document">
                            Document
                        </option>

                        <option value="non-document">
                            Non Document
                        </option>
                    </select>
                </div>


                {/* Weight */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Parcel Weight
                        </span>
                    </label>

                    <input
                        type="number"
                        name="parcelWeight"
                        defaultValue={parcel.parcelWeight}
                        className="input input-bordered w-full"
                        min="0"
                        required
                    />
                </div>


                {/* Receiver Name */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Receiver Name
                        </span>
                    </label>

                    <input
                        type="text"
                        name="receiverName"
                        defaultValue={parcel.receiverName}
                        className="input input-bordered w-full"
                        required
                    />
                </div>


                {/* Receiver Phone */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Receiver Phone
                        </span>
                    </label>

                    <input
                        type="text"
                        name="receiverPhone"
                        defaultValue={parcel.receiverPhone}
                        className="input input-bordered w-full"
                        required
                    />
                </div>


                {/* Receiver Region */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Receiver Region
                        </span>
                    </label>

                    <input
                        type="text"
                        name="receiverRegion"
                        defaultValue={parcel.receiverRegion}
                        className="input input-bordered w-full"
                        required
                    />
                </div>


                {/* Receiver District */}
                <div>
                    <label className="label">
                        <span className="label-text">
                            Receiver District
                        </span>
                    </label>

                    <input
                        type="text"
                        name="receiverDistrict"
                        defaultValue={parcel.receiverDistrict}
                        className="input input-bordered w-full"
                        required
                    />
                </div>


                {/* Receiver Address */}
                <div className="md:col-span-2">

                    <label className="label">
                        <span className="label-text">
                            Receiver Address
                        </span>
                    </label>

                    <textarea
                        name="receiverAddress"
                        defaultValue={parcel.receiverAddress}
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    />

                </div>


                {/* Buttons */}
                <div className="md:col-span-2 flex gap-3">

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Update Parcel
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(`/dashboard/parcel-details/${id}`)
                        }
                        className="btn btn-outline"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
};

export default UpdateParcel;