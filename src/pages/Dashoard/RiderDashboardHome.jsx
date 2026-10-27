// import React from "react";
// const RiderDashboardHome = () => {
//     return (
//         <div className="min-h-screen bg-base-200 p-4 md:p-6 lg:p-8">

//             {/* Welcome Section */}
//             <div className="mb-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-primary-content shadow-lg md:p-8">
//                 <p className="mb-2 text-sm opacity-80">
//                     Welcome back, Rider 
//                 </p>

//                 <h1 className="text-3xl font-bold md:text-4xl">
//                     Rider Dashboard
//                 </h1>

//                 <p className="mt-2 text-sm opacity-80 md:text-base">
//                     Manage your deliveries and track your daily performance.
//                 </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md">
//                     <p className="text-sm text-base-content/60">
//                         Assigned Parcels
//                     </p>

//                     <h2 className="mt-2 text-3xl font-bold">
//                         08
//                     </h2>

//                     <p className="mt-2 text-sm text-base-content/50">
//                         Parcels assigned to you
//                     </p>
//                 </div>

//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md">
//                     <p className="text-sm text-base-content/60">
//                         In Delivery
//                     </p>

//                     <h2 className="mt-2 text-3xl font-bold">
//                         03
//                     </h2>

//                     <p className="mt-2 text-sm text-base-content/50">
//                         Currently in delivery
//                     </p>
//                 </div>

//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md">
//                     <p className="text-sm text-base-content/60">
//                         Delivered
//                     </p>

//                     <h2 className="mt-2 text-3xl font-bold">
//                         42
//                     </h2>

//                     <p className="mt-2 text-sm text-base-content/50">
//                         Successfully delivered
//                     </p>
//                 </div>

//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md">
//                     <p className="text-sm text-base-content/60">
//                         Pending Pickup
//                     </p>

//                     <h2 className="mt-2 text-3xl font-bold">
//                         02
//                     </h2>

//                     <p className="mt-2 text-sm text-base-content/50">
//                         Waiting for pickup
//                     </p>
//                 </div>

//             </div>

//             {/* Main Content */}
//             <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

//                 {/* Today's Deliveries */}
//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md lg:col-span-2">

//                     <div className="mb-5">
//                         <h2 className="text-2xl font-bold">
//                             Today's Deliveries
//                         </h2>

//                         <p className="text-sm text-base-content/60">
//                             Your current delivery activities
//                         </p>
//                     </div>

//                     <div className="space-y-4">

//                         <div className="rounded-xl border border-base-300 p-4">
//                             <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

//                                 <div>
//                                     <h3 className="font-semibold">
//                                         PRCL-20260809-A1B2C3
//                                     </h3>

//                                     <p className="mt-1 text-sm text-base-content/60">
//                                         Dhaka → Gazipur
//                                     </p>
//                                 </div>

//                                 <span className="badge badge-info">
//                                     In Delivery
//                                 </span>

//                             </div>
//                         </div>

//                         <div className="rounded-xl border border-base-300 p-4">
//                             <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

//                                 <div>
//                                     <h3 className="font-semibold">
//                                         PRCL-20260809-D4E5F6
//                                     </h3>

//                                     <p className="mt-1 text-sm text-base-content/60">
//                                         Uttara → Mirpur
//                                     </p>
//                                 </div>

//                                 <span className="badge badge-warning">
//                                     Pending Pickup
//                                 </span>

//                             </div>
//                         </div>

//                         <div className="rounded-xl border border-base-300 p-4">
//                             <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

//                                 <div>
//                                     <h3 className="font-semibold">
//                                         PRCL-20260809-G7H8I9
//                                     </h3>

//                                     <p className="mt-1 text-sm text-base-content/60">
//                                         Dhanmondi → Banani
//                                     </p>
//                                 </div>

//                                 <span className="badge badge-success">
//                                     Delivered
//                                 </span>

//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Rider Status */}
//                 <div className="rounded-2xl bg-base-100 p-6 shadow-md">

//                     <h2 className="text-2xl font-bold">
//                         Rider Status
//                     </h2>

//                     <p className="mt-1 text-sm text-base-content/60">
//                         Your current availability
//                     </p>

//                     <div className="mt-6 rounded-xl bg-success/10 p-5 text-center">

//                         <div className="mx-auto h-4 w-4 rounded-full bg-success"></div>

//                         <h3 className="mt-3 text-xl font-bold">
//                             Available
//                         </h3>

//                         <p className="mt-1 text-sm text-base-content/60">
//                             You are ready to receive deliveries.
//                         </p>

//                     </div>

//                     <button className="btn btn-outline mt-5 w-full">
//                         Change Status
//                     </button>

//                 </div>

//             </div>

//             {/* Performance */}
//             <div className="mt-6 rounded-2xl bg-base-100 p-6 shadow-md">

//                 <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

//                     <div>
//                         <h2 className="text-2xl font-bold">
//                             Delivery Performance
//                         </h2>

//                         <p className="text-sm text-base-content/60">
//                             Your delivery success rate
//                         </p>
//                     </div>

//                     <div className="text-3xl font-bold text-primary">
//                         92%
//                     </div>

//                 </div>

//                 <progress
//                     className="progress progress-primary mt-5 w-full"
//                     value="92"
//                     max="100"
//                 ></progress>

//             </div>

//         </div>
//     );
// };

// export default RiderDashboardHome;


import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RiderDashboardHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: dashboardData = {},
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["rider-dashboard", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/riders/dashboard-stats?email=${user.email}`
            );

            return res.data;
        },
        enabled: !!user?.email,
    });

    if (isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="alert alert-error max-w-md">
                    <span>
                        Failed to load rider dashboard.
                    </span>
                </div>
            </div>
        );
    }

    const rider = dashboardData.rider || {};
    const stats = dashboardData.stats || {};
    const recentDeliveries = dashboardData.recentDeliveries || [];

    return (
        <div className="min-h-screen bg-base-200 p-4 md:p-6 lg:p-8">

            {/* Welcome Section */}
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-primary-content shadow-lg md:p-8">

                <p className="mb-2 text-sm opacity-80">
                    Welcome back, {rider.name || "Rider"} 👋
                </p>

                <h1 className="text-3xl font-bold md:text-4xl">
                    Rider Dashboard
                </h1>

                <p className="mt-2 text-sm opacity-80 md:text-base">
                    Manage your deliveries and track your daily performance.
                </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {/* Assigned */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Assigned Parcels
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {stats.assignedParcels || 0}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Total parcels assigned
                    </p>
                </div>

                {/* In Delivery */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        In Delivery
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {stats.inDelivery || 0}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Currently in delivery
                    </p>
                </div>

                {/* Delivered */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Delivered
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {stats.delivered || 0}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Successfully delivered
                    </p>
                </div>

                {/* Pending */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Pending Pickup
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {stats.pendingPickup || 0}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Waiting for pickup
                    </p>
                </div>

            </div>

            {/* Main Content */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* Recent Deliveries */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md lg:col-span-2">

                    <div className="mb-5">
                        <h2 className="text-2xl font-bold">
                            Recent Deliveries
                        </h2>

                        <p className="text-sm text-base-content/60">
                            Your latest delivery activities
                        </p>
                    </div>

                    <div className="space-y-4">

                        {recentDeliveries.length === 0 ? (
                            <div className="py-10 text-center text-base-content/50">
                                No deliveries found.
                            </div>
                        ) : (
                            recentDeliveries.map((parcel) => (

                                <div
                                    key={parcel._id}
                                    className="rounded-xl border border-base-300 p-4"
                                >

                                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

                                        <div>
                                            <h3 className="font-semibold">
                                                {parcel.trackingId}
                                            </h3>

                                            <p className="mt-1 text-sm text-base-content/60">
                                                {parcel.senderDistrict || "Unknown"}
                                                {" → "}
                                                {parcel.receiverDistrict || "Unknown"}
                                            </p>
                                        </div>

                                        <span
                                            className={`badge ${
                                                parcel.deliveryStatus ===
                                                "parcel_delivered"
                                                    ? "badge-success"
                                                    : parcel.deliveryStatus ===
                                                      "pending-pickup"
                                                    ? "badge-warning"
                                                    : "badge-info"
                                            }`}
                                        >
                                            {parcel.deliveryStatus
                                                ?.split("-")
                                                .join(" ")
                                                .replaceAll("_", " ")}
                                        </span>

                                    </div>

                                </div>

                            ))
                        )}

                    </div>

                </div>

                {/* Rider Status */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">

                    <h2 className="text-2xl font-bold">
                        Rider Status
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        Your current availability
                    </p>

                    <div
                        className={`mt-6 rounded-xl p-5 text-center ${
                            rider.workStatus === "available"
                                ? "bg-success/10"
                                : "bg-warning/10"
                        }`}
                    >

                        <div
                            className={`mx-auto h-4 w-4 rounded-full ${
                                rider.workStatus === "available"
                                    ? "bg-success"
                                    : "bg-warning"
                            }`}
                        ></div>

                        <h3 className="mt-3 text-xl font-bold capitalize">
                            {rider.workStatus
                                ?.replaceAll("_", " ") || "Unknown"}
                        </h3>

                        <p className="mt-1 text-sm text-base-content/60">
                            {rider.workStatus === "available"
                                ? "You are ready to receive deliveries."
                                : "You currently have an active delivery."}
                        </p>

                    </div>

                </div>

            </div>

            {/* Performance */}
            <div className="mt-6 rounded-2xl bg-base-100 p-6 shadow-md">

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Delivery Performance
                        </h2>

                        <p className="text-sm text-base-content/60">
                            Your delivery success rate
                        </p>
                    </div>

                    <div className="text-3xl font-bold text-primary">
                        {stats.deliveryRate || 0}%
                    </div>

                </div>

                <progress
                    className="progress progress-primary mt-5 w-full"
                    value={stats.deliveryRate || 0}
                    max="100"
                ></progress>

            </div>

        </div>
    );
};

export default RiderDashboardHome;