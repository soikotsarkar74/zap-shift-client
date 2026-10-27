import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Logo */}
                <div className="py-5 sm:py-6">
                    <Logo />
                </div>

                {/* Main Content */}
                <div className="
                    min-h-[calc(100vh-100px)]
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-center
                    gap-8
                    lg:gap-16
                    py-8
                    lg:py-12
                ">

                    {/* Auth Form */}
                    <div className="
                        w-full
                        max-w-md
                        lg:flex-1
                        flex
                        justify-center
                    ">
                        <div className="w-full">
                            <Outlet />
                        </div>
                    </div>

                    {/* Auth Image */}
                    <div className="
                        hidden
                        md:flex
                        lg:flex-1
                        justify-center
                        items-center
                    ">
                        <img
                            src={authImage}
                            alt="Authentication illustration"
                            className="
                                w-full
                                max-w-lg
                                h-auto
                                object-contain
                            "
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

