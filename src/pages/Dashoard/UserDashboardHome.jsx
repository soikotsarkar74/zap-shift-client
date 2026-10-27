// import React from 'react';

// const UserDashboardHome = () => {
//     return (
//         <div>
//             <h2 className="text-4xl">User Dashing</h2>
//         </div>
//     );
// };

// export default UserDashboardHome;


import React from "react";

const UserDashboardHome = () => {
    return (
        <div className="min-h-screen bg-base-200 p-4 md:p-6 lg:p-8">

            {/* Welcome Section */}
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-primary-content shadow-lg md:p-8">
                <p className="mb-2 text-sm opacity-80">
                    Welcome back 👋
                </p>

                <h1 className="text-3xl font-bold md:text-4xl">
                    User Dashboard
                </h1>

                <p className="mt-2 text-sm opacity-80 md:text-base">
                    Manage your parcels, track deliveries, and view your
                    shipping activity from one place.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Total Parcels
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        24
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        All parcels you created
                    </p>
                </div>

                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        In Transit
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        08
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Currently on the way
                    </p>
                </div>

                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Delivered
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        14
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Successfully delivered
                    </p>
                </div>

                <div className="rounded-2xl bg-base-100 p-6 shadow-md">
                    <p className="text-sm text-base-content/60">
                        Pending
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        02
                    </h2>

                    <p className="mt-2 text-sm text-base-content/50">
                        Waiting for pickup
                    </p>
                </div>

            </div>

            {/* Recent Parcels */}
            <div className="mt-6 rounded-2xl bg-base-100 p-6 shadow-md">

                <div className="mb-5">
                    <h2 className="text-2xl font-bold">
                        Recent Parcels
                    </h2>

                    <p className="text-sm text-base-content/60">
                        Your latest parcel activity
                    </p>
                </div>

                <div className="space-y-4">

                    {/* Parcel 1 */}
                    <div className="flex flex-col justify-between gap-3 rounded-xl border border-base-300 p-4 md:flex-row md:items-center">

                        <div>
                            <h3 className="font-semibold">
                                PRCL-20260809-A1B2C3
                            </h3>

                            <p className="mt-1 text-sm text-base-content/60">
                                Dhaka → Chattogram
                            </p>
                        </div>

                        <span className="badge badge-info">
                            In Transit
                        </span>

                    </div>

                    {/* Parcel 2 */}
                    <div className="flex flex-col justify-between gap-3 rounded-xl border border-base-300 p-4 md:flex-row md:items-center">

                        <div>
                            <h3 className="font-semibold">
                                PRCL-20260808-D4E5F6
                            </h3>

                            <p className="mt-1 text-sm text-base-content/60">
                                Rajshahi → Dhaka
                            </p>
                        </div>

                        <span className="badge badge-success">
                            Delivered
                        </span>

                    </div>

                    {/* Parcel 3 */}
                    <div className="flex flex-col justify-between gap-3 rounded-xl border border-base-300 p-4 md:flex-row md:items-center">

                        <div>
                            <h3 className="font-semibold">
                                PRCL-20260807-G7H8I9
                            </h3>

                            <p className="mt-1 text-sm text-base-content/60">
                                Cumilla → Rajshahi
                            </p>
                        </div>

                        <span className="badge badge-warning">
                            Pending Pickup
                        </span>

                    </div>

                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* Shipping Summary */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">

                    <h2 className="text-2xl font-bold">
                        Shipping Summary
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        Overview of your parcel activity
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-3">

                        <div className="rounded-xl bg-base-200 p-4 text-center">
                            <h3 className="text-2xl font-bold">
                                24
                            </h3>

                            <p className="text-xs text-base-content/60">
                                Total
                            </p>
                        </div>

                        <div className="rounded-xl bg-base-200 p-4 text-center">
                            <h3 className="text-2xl font-bold">
                                14
                            </h3>

                            <p className="text-xs text-base-content/60">
                                Delivered
                            </p>
                        </div>

                        <div className="rounded-xl bg-base-200 p-4 text-center">
                            <h3 className="text-2xl font-bold">
                                08
                            </h3>

                            <p className="text-xs text-base-content/60">
                                Transit
                            </p>
                        </div>

                    </div>

                </div>

                {/* Account Overview */}
                <div className="rounded-2xl bg-base-100 p-6 shadow-md">

                    <h2 className="text-2xl font-bold">
                        Account Overview
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        Your account information
                    </p>

                    <div className="mt-5 space-y-4">

                        <div className="flex justify-between border-b border-base-300 pb-3">
                            <span className="text-base-content/60">
                                Account Type
                            </span>

                            <span className="font-semibold">
                                User
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-base-300 pb-3">
                            <span className="text-base-content/60">
                                Total Parcels
                            </span>

                            <span className="font-semibold">
                                24
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-base-content/60">
                                Delivery Success
                            </span>

                            <span className="font-semibold text-success">
                                92%
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserDashboardHome;
