import React from "react";
import { FaTruckFast, FaShieldHalved, FaClock, FaLocationDot } from "react-icons/fa6";

const About = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                        About Zap Shift
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-5">
                        Fast, Secure & Reliable Parcel Delivery
                    </h2>

                    <p className="text-base-content/70 text-lg">
                        Zap Shift is a modern parcel delivery platform designed to make
                        sending and receiving packages easier, faster, and more reliable.
                        We connect customers, riders, and administrators through one
                        simple delivery management system.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Image / Illustration */}
                    <div className="bg-primary/10 rounded-3xl p-8 flex justify-center">
                        <div className="text-center">
                            <FaTruckFast className="text-primary text-9xl mx-auto mb-6" />

                            <h3 className="text-3xl font-bold mb-3">
                                Delivering With Confidence
                            </h3>

                            <p className="text-base-content/70 max-w-md">
                                From booking a parcel to final delivery, Zap Shift
                                provides a smooth and transparent experience at every step.
                            </p>
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-3xl font-bold mb-5">
                            Why Choose Zap Shift?
                        </h3>

                        <p className="text-base-content/70 leading-7 mb-6">
                            We believe parcel delivery should be simple and transparent.
                            Zap Shift provides customers with an easy way to create
                            deliveries, make secure payments, track parcels, and monitor
                            delivery progress.
                        </p>

                        <div className="space-y-5">

                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-4 rounded-xl">
                                    <FaTruckFast className="text-primary text-2xl" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        Fast Delivery
                                    </h4>
                                    <p className="text-base-content/60">
                                        Efficient delivery management helps get parcels
                                        to their destination on time.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-4 rounded-xl">
                                    <FaShieldHalved className="text-primary text-2xl" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        Secure & Reliable
                                    </h4>
                                    <p className="text-base-content/60">
                                        We focus on secure payments, authentication, and
                                        reliable parcel tracking.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-4 rounded-xl">
                                    <FaClock className="text-primary text-2xl" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        Real-Time Tracking
                                    </h4>
                                    <p className="text-base-content/60">
                                        Track your parcel and stay updated throughout the
                                        delivery process.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-4 rounded-xl">
                                    <FaLocationDot className="text-primary text-2xl" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        Wide Coverage
                                    </h4>
                                    <p className="text-base-content/60">
                                        Our delivery network is designed to connect
                                        different regions and districts efficiently.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

                    <div className="text-center p-6 rounded-2xl bg-base-200">
                        <h3 className="text-3xl font-bold text-primary">
                            10K+
                        </h3>
                        <p className="text-base-content/60 mt-2">
                            Parcels Delivered
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-base-200">
                        <h3 className="text-3xl font-bold text-primary">
                            500+
                        </h3>
                        <p className="text-base-content/60 mt-2">
                            Active Riders
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-base-200">
                        <h3 className="text-3xl font-bold text-primary">
                            64+
                        </h3>
                        <p className="text-base-content/60 mt-2">
                            Districts Covered
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-base-200">
                        <h3 className="text-3xl font-bold text-primary">
                            99%
                        </h3>
                        <p className="text-base-content/60 mt-2">
                            Customer Satisfaction
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;