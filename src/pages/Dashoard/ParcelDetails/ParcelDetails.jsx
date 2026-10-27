
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router';
import {
    FiArrowLeft,
    FiMapPin,
    FiPackage,
    FiUser,
    FiPhone,
    FiMail,
    FiEdit3,
    FiTruck,
    FiCreditCard,
    FiNavigation,
} from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ParcelDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: parcel = {}, isLoading, isError } = useQuery({
        queryKey: ['parcel-details', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    // Loading
    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="mt-4 text-sm text-base-content/60">
                        Loading parcel details...
                    </p>
                </div>
            </div>
        );
    }

    // Error / Not Found
    if (isError || !parcel?._id) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-error/10 flex items-center justify-center">
                        <FiPackage className="text-4xl text-error" />
                    </div>

                    <h2 className="text-2xl font-bold mt-5">
                        Parcel Not Found
                    </h2>

                    <p className="text-base-content/60 mt-2">
                        We couldn't find the parcel you're looking for.
                    </p>

                    <Link
                        to="/dashboard/my-parcels"
                        className="btn btn-primary mt-6"
                    >
                        <FiArrowLeft />
                        Back to My Parcels
                    </Link>
                </div>
            </div>
        );
    }

    const isPaid = parcel.paymentStatus === 'paid';

    const statusStyles = {
        pending: 'badge-warning',
        'pending-pickup': 'badge-warning',
        picked_up: 'badge-info',
        'in-transit': 'badge-info',
        delivered: 'badge-success',
        parcel_delivered: 'badge-success',
        cancelled: 'badge-error',
    };

    const deliveryStatusClass =
        statusStyles[parcel.deliveryStatus] || 'badge-neutral';

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <FiPackage className="text-2xl text-primary" />
                    </div>

                    <div>
                        <p className="text-sm text-base-content/50 mb-1">
                            Parcel Management
                        </p>

                        <h1 className="text-2xl md:text-3xl font-bold">
                            Parcel Details
                        </h1>

                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="text-sm text-base-content/60">
                                Tracking ID:
                            </span>

                            <span className="font-mono text-sm font-semibold text-primary">
                                {parcel.trackingId || 'Not generated'}
                            </span>
                        </div>
                    </div>
                </div>

                <Link
                    to="/dashboard/my-parcels"
                    className="btn btn-outline btn-sm md:btn-md"
                >
                    <FiArrowLeft />
                    Back to Parcels
                </Link>
            </div>

            {/* Status Overview */}
            <div className="card bg-base-100 border border-base-200 shadow-sm mb-6">
                <div className="card-body">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <FiTruck className="text-xl text-primary" />
                            </div>

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Current Delivery Status
                                </p>

                                <div className="flex items-center gap-3 mt-1">
                                    <span
                                        className={`badge ${deliveryStatusClass} badge-lg capitalize`}
                                    >
                                        {parcel.deliveryStatus?.replaceAll(
                                            '_',
                                            ' '
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                                <FiCreditCard className="text-xl text-success" />
                            </div>

                            <div>
                                <p className="text-sm text-base-content/50">
                                    Payment Status
                                </p>

                                <span
                                    className={`badge badge-lg mt-1 ${
                                        isPaid
                                            ? 'badge-success'
                                            : 'badge-warning'
                                    }`}
                                >
                                    {parcel.paymentStatus || 'Unpaid'}
                                </span>
                            </div>
                        </div>

                        <div className="lg:text-right">
                            <p className="text-sm text-base-content/50">
                                Delivery Cost
                            </p>

                            <p className="text-2xl font-bold text-primary mt-1">
                                ৳{parcel.cost || 0}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Parcel Information */}
                <InfoCard
                    title="Parcel Information"
                    icon={<FiPackage />}
                >
                    <InfoRow
                        label="Parcel Name"
                        value={parcel.parcelName}
                    />

                    <InfoRow
                        label="Parcel Type"
                        value={parcel.parcelType}
                        capitalize
                    />

                    <InfoRow
                        label="Weight"
                        value={`${parcel.parcelWeight || 0} kg`}
                    />

                    <InfoRow
                        label="Delivery Cost"
                        value={`৳${parcel.cost || 0}`}
                        valueClass="font-bold text-primary"
                    />

                    <InfoRow
                        label="Tracking ID"
                        value={parcel.trackingId || 'Not generated'}
                        valueClass="font-mono text-primary"
                    />
                </InfoCard>

                {/* Sender Information */}
                <InfoCard
                    title="Sender Information"
                    icon={<FiUser />}
                >
                    <InfoRow
                        label="Name"
                        value={parcel.senderName}
                    />

                    <InfoRow
                        label="Email"
                        value={parcel.senderEmail}
                        icon={<FiMail />}
                    />

                    <InfoRow
                        label="Phone"
                        value={parcel.senderPhone}
                        icon={<FiPhone />}
                    />

                    <InfoRow
                        label="Region"
                        value={parcel.senderRegion}
                        icon={<FiMapPin />}
                    />

                    <InfoRow
                        label="District"
                        value={parcel.senderDistrict}
                    />

                    <InfoRow
                        label="Address"
                        value={parcel.senderAddress}
                    />
                </InfoCard>

                {/* Receiver Information */}
                <InfoCard
                    title="Receiver Information"
                    icon={<FaLocationDot />}
                >
                    <InfoRow
                        label="Name"
                        value={parcel.receiverName}
                    />

                    <InfoRow
                        label="Phone"
                        value={parcel.receiverPhone}
                        icon={<FiPhone />}
                    />

                    <InfoRow
                        label="Region"
                        value={parcel.receiverRegion}
                        icon={<FiMapPin />}
                    />

                    <InfoRow
                        label="District"
                        value={parcel.receiverDistrict}
                    />

                    <InfoRow
                        label="Address"
                        value={parcel.receiverAddress}
                    />
                </InfoCard>

                {/* Delivery Information */}
                <InfoCard
                    title="Delivery Information"
                    icon={<FiTruck />}
                >
                    <InfoRow
                        label="Rider Name"
                        value={parcel.riderName || 'Not assigned'}
                    />

                    <InfoRow
                        label="Rider Email"
                        value={parcel.riderEmail || 'Not assigned'}
                        icon={<FiMail />}
                    />

                    <InfoRow
                        label="Delivery Status"
                        value={
                            parcel.deliveryStatus?.replaceAll('_', ' ') ||
                            'Pending'
                        }
                        capitalize
                    />

                    <InfoRow
                        label="Tracking"
                        value={
                            parcel.trackingId
                                ? 'Available'
                                : 'Not available'
                        }
                        valueClass={
                            parcel.trackingId
                                ? 'text-success font-semibold'
                                : 'text-base-content/50'
                        }
                    />
                </InfoCard>
            </div>

            {/* Route Overview */}
            <div className="card bg-base-100 border border-base-200 shadow-sm mt-6">
                <div className="card-body">

                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <FiNavigation className="text-primary" />
                        </div>

                        <div>
                            <h2 className="font-bold text-lg">
                                Delivery Route
                            </h2>

                            <p className="text-sm text-base-content/50">
                                Parcel pickup and destination
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-5">

                        {/* Pickup */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center shrink-0">
                                <FiMapPin className="text-info" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-base-content/50">
                                    Pickup From
                                </p>

                                <p className="font-semibold mt-1">
                                    {parcel.senderDistrict}
                                </p>

                                <p className="text-sm text-base-content/60">
                                    {parcel.senderRegion}
                                </p>
                            </div>
                        </div>

                        {/* Route Line */}
                        <div className="hidden md:flex items-center gap-2 text-base-content/30">
                            <span className="w-16 border-t-2 border-dashed border-base-300"></span>
                            <FiTruck className="text-primary text-xl" />
                            <span className="w-16 border-t-2 border-dashed border-base-300"></span>
                        </div>

                        {/* Destination */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                                <FaLocationDot className="text-success" />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wide text-base-content/50">
                                    Deliver To
                                </p>

                                <p className="font-semibold mt-1">
                                    {parcel.receiverDistrict}
                                </p>

                                <p className="text-sm text-base-content/60">
                                    {parcel.receiverRegion}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <Link
                    to={`/dashboard/update-parcel/${parcel._id}`}
                    className="btn btn-primary flex-1 sm:flex-none"
                >
                    <FiEdit3 />
                    Edit Parcel
                </Link>

                {parcel.trackingId && (
                    <Link
                        to={`/parcel-track/${parcel.trackingId}`}
                        className="btn btn-outline flex-1 sm:flex-none"
                    >
                        <FiNavigation />
                        Track Parcel
                    </Link>
                )}

                <Link
                    to="/dashboard/my-parcels"
                    className="btn btn-ghost flex-1 sm:flex-none"
                >
                    <FiArrowLeft />
                    Back to Parcels
                </Link>

            </div>
        </div>
    );
};


/* =========================
   Reusable Components
========================= */

const InfoCard = ({ title, icon, children }) => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="card-body">

                <div className="flex items-center gap-3 pb-4 border-b border-base-200">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {icon}
                    </div>

                    <h2 className="font-bold text-lg">
                        {title}
                    </h2>
                </div>

                <div className="divide-y divide-base-200">
                    {children}
                </div>

            </div>
        </div>
    );
};


const InfoRow = ({
    label,
    value,
    icon,
    valueClass = '',
    capitalize = false,
}) => {
    return (
        <div className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">

            <div className="flex items-center gap-2 text-sm text-base-content/60">
                {icon && (
                    <span className="text-base-content/40">
                        {icon}
                    </span>
                )}

                <span>{label}</span>
            </div>

            <span
                className={`text-sm font-medium sm:text-right ${valueClass} ${
                    capitalize ? 'capitalize' : ''
                }`}
            >
                {value || 'N/A'}
            </span>

        </div>
    );
};

export default ParcelDetails;
