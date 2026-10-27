import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const { user } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm();

  // Unique Regions
  const regions = [...new Set(serviceCenters.map((item) => item.region))];

  // Watch Region
  const selectedSenderRegion = useWatch({
    control,
    name: "senderRegion",
  });

  const selectedReceiverRegion = useWatch({
    control,
    name: "receiverRegion",
  });

  // District by Region
  const districtsByRegion = (region) => {
    return serviceCenters
      .filter((item) => item.region === region)
      .map((item) => item.district);
  };

  const senderDistricts = selectedSenderRegion
    ? districtsByRegion(selectedSenderRegion)
    : [];

  const receiverDistricts = selectedReceiverRegion
    ? districtsByRegion(selectedReceiverRegion)
    : [];

  // Reset district when region changes
  useEffect(() => {
    setValue("senderDistrict", "");
  }, [selectedSenderRegion, setValue]);

  useEffect(() => {
    setValue("receiverDistrict", "");
  }, [selectedReceiverRegion, setValue]);

  // Submit Form
  const handleSendParcel = (data) => {
    if (isSubmitting) return;

    const isDocument = data.parcelType === "document";
    const sameDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight) || 0;

    let cost = 0;

    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        const minCharge = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    Swal.fire({
      title: "Confirm Parcel",
      html: `
        <div style="text-align:left">
          <p><strong>Parcel:</strong> ${data.parcelName}</p>
          <p><strong>Sender:</strong> ${data.senderName}</p>
          <p><strong>Receiver:</strong> ${data.receiverName}</p>
          <p><strong>Total Cost:</strong> ৳${cost}</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
    }).then((result) => {
      if (result.isConfirmed) {
        submitParcelToServer({
          ...data,
          cost,
          payment_status: "unpaid",
          delivery_status: "not_collected",
          creation_date: new Date().toISOString(),
        });
      }
    });
  };

  // Save Parcel To Database
  const submitParcelToServer = async (parcelData) => {
    setIsSubmitting(true);

    try {
      Swal.fire({
        title: "Submitting...",
        text: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const res = await axiosSecure.post("/parcels", parcelData);

      if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Parcel submitted successfully.",
          confirmButtonColor: "#16a34a",
        });

        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Parcel could not be submitted.",
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset Form
  const handleReset = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "All form data will be cleared.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Reset",
    }).then((result) => {
      if (result.isConfirmed) {
        reset();

        Swal.fire({
          icon: "success",
          title: "Reset Complete",
          text: "Form has been reset successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="bg-base-200 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Send A Parcel</h2>
          <p className="text-gray-500 mt-2">
            Fill in the parcel information below.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-10">
          {/* Parcel Information */}
          <div>
            <h3 className="text-2xl font-semibold border-b pb-3 mb-6">
              Parcel Information
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Parcel Type */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Parcel Type <span className="text-red-500">*</span>
                  </span>
                </label>

                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="document"
                      defaultChecked
                      className="radio radio-primary"
                      {...register("parcelType", {
                        required: "Parcel type is required",
                      })}
                    />
                    Document
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="non-document"
                      className="radio radio-primary"
                      {...register("parcelType", {
                        required: "Parcel type is required",
                      })}
                    />
                    Non Document
                  </label>
                </div>

                {errors.parcelType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parcelType.message}
                  </p>
                )}
              </div>

              <div></div>

              {/* Parcel Name */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Parcel Name <span className="text-red-500">*</span>
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Parcel Name"
                  className={`input input-bordered w-full ${errors.parcelName ? "input-error" : ""
                    }`}
                  {...register("parcelName", {
                    required: "Parcel Name is required",
                  })}
                />

                {errors.parcelName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parcelName.message}
                  </p>
                )}
              </div>

              {/* Parcel Weight */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Parcel Weight (KG)
                  </span>
                </label>

                <input
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="Parcel Weight"
                  className="input input-bordered w-full"
                  {...register("parcelWeight")}
                />
              </div>
            </div>
          </div>

          {/* Sender & Receiver */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sender */}
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Sender Details</h3>

              <div className="space-y-4">
                {/* Sender Name */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender Name <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Sender Name"
                    defaultValue={user?.displayName || ""}
                    className={`input input-bordered w-full ${errors.senderName ? "input-error" : ""
                      }`}
                    {...register("senderName", {
                      required: "Sender Name is required",
                    })}
                  />

                  {errors.senderName && (
                    <p className="text-red-500 text-sm">
                      {errors.senderName.message}
                    </p>
                  )}
                </div>

                {/* Sender Email */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender Email <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder="Sender Email"
                    defaultValue={user?.email || ""}
                    className={`input input-bordered w-full ${errors.senderEmail ? "input-error" : ""
                      }`}
                    {...register("senderEmail", {
                      required: "Sender Email is required",
                    })}
                  />

                  {errors.senderEmail && (
                    <p className="text-red-500 text-sm">
                      {errors.senderEmail.message}
                    </p>
                  )}
                </div>

                {/* Sender Phone */}

                {/* Sender Phone */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender Phone <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter sender phone number (e.g., 017XXXXXXXX)"
                    defaultValue={user?.phoneNumber || ""}
                    className={`input input-bordered w-full ${errors.senderPhone ? "input-error" : ""}`}
                    {...register("senderPhone", {
                      required: "Sender Phone is required",
                      pattern: {
                        value: /^(?:\+8801|01)[3-9]\d{8}$/,
                        message: "Enter a valid Bangladesh phone number"
                      }
                    })}
                  />
                  {errors.senderPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.senderPhone.message}
                    </p>
                  )}
                </div>
                {/* Sender Address */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender Address <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Sender Address"
                    className={`textarea textarea-bordered w-full ${errors.senderAddress ? "textarea-error" : ""
                      }`}
                    {...register("senderAddress", {
                      required: "Sender Address is required",
                    })}
                  ></textarea>

                  {errors.senderAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.senderAddress.message}
                    </p>
                  )}
                </div>

                {/* Sender Region */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender Region <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <select
                    className={`select select-bordered w-full ${errors.senderRegion ? "select-error" : ""
                      }`}
                    {...register("senderRegion", {
                      required: "Sender Region is required",
                    })}
                  >
                    <option value="">Select Region</option>

                    {regions.map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>

                  {errors.senderRegion && (
                    <p className="text-red-500 text-sm">
                      {errors.senderRegion.message}
                    </p>
                  )}
                </div>

                {/* Sender District */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Sender District <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <select
                    disabled={!selectedSenderRegion}
                    className={`select select-bordered w-full ${errors.senderDistrict ? "select-error" : ""
                      }`}
                    {...register("senderDistrict", {
                      required: "Sender District is required",
                    })}
                  >
                    <option value="">Select District</option>

                    {senderDistricts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>

                  {errors.senderDistrict && (
                    <p className="text-red-500 text-sm">
                      {errors.senderDistrict.message}
                    </p>
                  )}
                </div>

                {/* Pickup Instruction */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Pickup Instruction
                    </span>
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Pickup Instruction"
                    className="textarea textarea-bordered w-full"
                    {...register("pickupInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Receiver Details</h3>

              <div className="space-y-4">
                {/* Receiver Name */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver Name <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <input
                    type="text"
                    placeholder="Receiver Name"
                    className={`input input-bordered w-full ${errors.receiverName ? "input-error" : ""
                      }`}
                    {...register("receiverName", {
                      required: "Receiver Name is required",
                    })}
                  />

                  {errors.receiverName && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverName.message}
                    </p>
                  )}
                </div>

                {/* Receiver Email */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver Email <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder="Receiver Email"
                    className={`input input-bordered w-full ${errors.receiverEmail ? "input-error" : ""
                      }`}
                    {...register("receiverEmail", {
                      required: "Receiver Email is required",
                    })}
                  />

                  {errors.receiverEmail && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverEmail.message}
                    </p>
                  )}
                </div>
                {/* Receiver Phone */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver Phone <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter receiver phone number (e.g., 017XXXXXXXX)"
                    className={`input input-bordered w-full ${errors.receiverPhone ? "input-error" : ""}`}
                    {...register("receiverPhone", {
                      required: "Receiver Phone is required",
                      pattern: {
                        value: /^(?:\+8801|01)[3-9]\d{8}$/,
                        message: "Enter a valid Bangladesh phone number"
                      }
                    })}
                  />
                  {errors.receiverPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.receiverPhone.message}
                    </p>
                  )}
                </div>
                {/* Receiver Address */}

                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver Address <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Receiver Address"
                    className={`textarea textarea-bordered w-full ${errors.receiverAddress ? "textarea-error" : ""
                      }`}
                    {...register("receiverAddress", {
                      required: "Receiver Address is required",
                    })}
                  ></textarea>

                  {errors.receiverAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverAddress.message}
                    </p>
                  )}
                </div>

                {/* Receiver Region */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver Region <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <select
                    className={`select select-bordered w-full ${errors.receiverRegion ? "select-error" : ""
                      }`}
                    {...register("receiverRegion", {
                      required: "Receiver Region is required",
                    })}
                  >
                    <option value="">Select Region</option>

                    {regions.map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>

                  {errors.receiverRegion && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverRegion.message}
                    </p>
                  )}
                </div>

                {/* Receiver District */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Receiver District <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <select
                    disabled={!selectedReceiverRegion}
                    className={`select select-bordered w-full ${errors.receiverDistrict ? "select-error" : ""
                      }`}
                    {...register("receiverDistrict", {
                      required: "Receiver District is required",
                    })}
                  >
                    <option value="">Select District</option>

                    {receiverDistricts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>

                  {errors.receiverDistrict && (
                    <p className="text-red-500 text-sm">
                      {errors.receiverDistrict.message}
                    </p>
                  )}
                </div>

                {/* Delivery Instruction */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Delivery Instruction
                    </span>
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Delivery Instruction"
                    className="textarea textarea-bordered w-full"
                    {...register("deliveryInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? "Submitting..." : "Submit Parcel"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="btn btn-outline btn-error"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;


