import React from "react";

const PrioritySection = () => {
  return (
    <section className="py-12 px-6 md:px-20 bg-secondary rounded-2xl">
      <div className="max-w-4xl mx-auto text-center space-y-5">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>

        {/* Description */}
        <p className="text-white leading-relaxed">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. ZapShift Courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
            Become a Merchant
          </button>

          <button className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-black transition font-semibold">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrioritySection;
