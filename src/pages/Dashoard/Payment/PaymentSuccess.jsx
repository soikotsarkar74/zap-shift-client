
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { FaCircleCheck, FaTruckFast } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const sessionId = searchParams.get("session_id");
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!sessionId) {
            setLoading(false);
            return;
        }

        axiosSecure
            .patch(`/payment-success?session_id=${sessionId}`)
            .then((res) => {
                console.log(res.data);

                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId: res.data.trackingId,
                });
            })
            .catch((error) => {
                console.error("Payment confirmation failed:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [sessionId, axiosSecure]);

    if (loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">

                {/* Success Card */}
                <div className="bg-base-100 border border-base-300 shadow-xl rounded-3xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-primary/10 px-6 py-10 text-center">
                        <FaCircleCheck className="text-success text-7xl mx-auto mb-5" />

                        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
                            Payment Successful!
                        </h1>

                        <p className="text-base-content/60 mt-3">
                            Your payment has been successfully processed.
                        </p>
                    </div>

                    {/* Payment Details */}
                    <div className="p-6 md:p-8">

                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <FaTruckFast className="text-primary text-2xl" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Delivery Information
                                </h2>

                                <p className="text-sm text-base-content/50">
                                    Keep these details for tracking your parcel.
                                </p>
                            </div>
                        </div>

                        {/* Transaction ID */}
                        <div className="bg-base-200 rounded-2xl p-5 mb-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <span className="text-base-content/60">
                                    Transaction ID
                                </span>

                                <span className="font-semibold break-all">
                                    {paymentInfo.transactionId || "N/A"}
                                </span>
                            </div>
                        </div>

                        {/* Tracking ID */}
                        <div className="bg-base-200 rounded-2xl p-5">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <span className="text-base-content/60">
                                    Parcel Tracking ID
                                </span>

                                <span className="font-semibold text-primary break-all">
                                    {paymentInfo.trackingId || "N/A"}
                                </span>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="alert alert-success mt-6">
                            <FaCircleCheck />

                            <span>
                                Your parcel is now ready for the delivery process.
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-8">

                            <Link
                                to="/dashboard/my-parcels"
                                className="btn btn-primary flex-1"
                            >
                                View My Parcels
                            </Link>

                            <Link
                                to="/"
                                className="btn btn-outline flex-1"
                            >
                                Back to Home
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-base-content/50 mt-5">
                    Thank you for choosing Zap Shift. Your parcel is on its way!
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;


