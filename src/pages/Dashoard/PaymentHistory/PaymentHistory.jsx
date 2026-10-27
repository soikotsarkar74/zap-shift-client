import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaMoneyCheckAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
	


        `/payments?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-error">
        <span>Failed to load payment history.</span>
      </div>
    );
  }

  return (
    <div className="bg-base-100 rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaMoneyCheckAlt className="text-3xl text-primary" />
        <div>
          <h2 className="text-3xl font-bold">Payment History</h2>
          <p className="text-gray-500">
            Total Payments: {payments.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>Parcel</th>
              <th>Transaction ID</th>
              <th>Paid Time</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>

                  <td>{payment.parcelName}</td>

                  <td className="font-mono text-xs">
                    {payment.transactionId}
                  </td>
                    <td> {payment.paidAt}</td>

                  <td>৳ {payment.amount}</td>

                  <td>{payment.currency}</td>

                  <td>
                    {new Date(payment.paid_at).toLocaleDateString()}
                  </td>

                  <td>
                    <span className="badge badge-success">
                      Paid
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10">
                  <div className="flex flex-col items-center gap-2">
                    <FaMoneyCheckAlt className="text-5xl text-gray-300" />
                    <p className="text-lg font-medium">
                      No Payment History Found
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;