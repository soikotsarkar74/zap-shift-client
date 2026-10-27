import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaArrowLeft } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <FaTimesCircle className="text-red-500 text-7xl mx-auto mb-4" />

        <h2 className="text-3xl font-bold text-red-600">
          Payment Cancel
        </h2>

        <p className="text-gray-600 mt-3">
          Your payment was cancelled. No money has been charged to your
          account.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            to="/dashboard/my-parcels"
            className="btn btn-primary w-full"
          >
			<button className="btn btn-primary-400 text-black">  Try Again  </button>
           
          </Link>

          <Link
            to="/"
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;