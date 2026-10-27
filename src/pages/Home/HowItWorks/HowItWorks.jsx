import React from "react";

const HowItWorks = () => {
  return (
    <div className="px-6 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        How it Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Cash On Delivery
          </h3>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Delivery Hub
          </h3>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Booking SME & Corporate
          </h3>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
