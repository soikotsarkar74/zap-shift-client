import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ViewParcel = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: parcel, isLoading } = useQuery({
    queryKey: ["parcel", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!parcel) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Parcel not found</h2>
        <button
          onClick={() => navigate("/dashboard/my-parcels")}
          className="btn btn-primary mt-4"
        >
          Back to Parcels
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Parcel Details</h2>
        <button
          onClick={() => navigate("/dashboard/my-parcels")}
          className="btn btn-outline"
        >
          Back
        </button>
      </div>

      <div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Parcel Name</h3>
            <p className="text-lg font-semibold">{parcel.parcelName}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Parcel Type</h3>
            <p className="text-lg font-semibold">
              <span className="badge badge-info badge-outline">
                {parcel.parcelType}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Weight</h3>
            <p className="text-lg font-semibold">{parcel.parcelWeight} KG</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Cost</h3>
            <p className="text-lg font-semibold text-primary">
              ৳ {parcel.cost}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Receiver Name</h3>
            <p className="text-lg font-semibold">{parcel.receiverName}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Receiver Phone</h3>
            <p className="text-lg font-semibold">{parcel.receiverPhone}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-gray-500">Delivery Address</h3>
            <p className="text-lg font-semibold">{parcel.deliveryAddress}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Payment Status</h3>
            <p>
              <span
                className={`badge ${
                  parcel.payment_status === "paid"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {parcel.payment_status}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Delivery Status</h3>
            <p>
              <span
                className={`badge ${
                  parcel.delivery_status === "delivered"
                    ? "badge-success"
                    : "badge-secondary"
                }`}
              >
                {parcel.delivery_status}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Created Date</h3>
            <p className="text-lg font-semibold">
              {new Date(parcel.creation_date).toLocaleDateString("en-GB")}
            </p>
          </div>

          {parcel.delivery_date && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Delivery Date</h3>
              <p className="text-lg font-semibold">
                {new Date(parcel.delivery_date).toLocaleDateString("en-GB")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewParcel;