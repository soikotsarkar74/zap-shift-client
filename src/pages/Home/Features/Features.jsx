import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-5xl text-blue-600" />,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-green-600" />,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      icon: <FaHeadset className="text-5xl text-orange-500" />,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <div className="space-y-10 max-w-5xl mx-auto">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition duration-300"
          >
            {/* Icon Section (same place as image) */}
            <div className="w-full md:w-1/3 flex justify-center">
              {feature.icon}
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;

