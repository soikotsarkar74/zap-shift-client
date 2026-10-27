import React from "react";

const OurServices = () => {
  return (
    <div className="px-6 md:px-12 py-14 bg-secondary rounded-4xl">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className=" mt-4 text-lg text-white">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Service 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Express & Standard Delivery
          </h3>
          <p className="text-gray-600">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, 
            Khulna, and Rajshahi. Express delivery available in Dhaka within 
            4–6 hours from pick-up to drop-off.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Nationwide Delivery
          </h3>
          <p className="text-gray-600">
            We deliver parcels nationwide with home delivery in every district, 
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Fulfillment Solution
          </h3>
          <p className="text-gray-600">
            We offer customized service with inventory management support, 
            online order processing, packaging, and after-sales support.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Cash on Home Delivery
          </h3>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety 
            of your product.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Corporate Service / Logistics Contract
          </h3>
          <p className="text-gray-600">
            Customized corporate services including warehouse and inventory 
            management support.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Parcel Return
          </h3>
          <p className="text-gray-600">
            Through our reverse logistics, customers can return or exchange 
            products with online merchants easily.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurServices;
