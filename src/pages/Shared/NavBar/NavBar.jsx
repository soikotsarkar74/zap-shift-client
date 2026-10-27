import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Logo from '../../../components/Logo/Logo';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };

    const links = (
        <>
            <li>
                <NavLink to="">Services</NavLink>
            </li>

            <li>
                <NavLink to="/send-parcel">Send a Parcel</NavLink>
            </li>

            <li>
                <NavLink to="/rider">Be a Rider</NavLink>
            </li>

            <li>
                <NavLink to="/coverage">Coverage Areas</NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink to="/dashboard/my-parcels">
                            My Parcels
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                </>
            )}

            <li>
                <NavLink to="about">About Us</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-3 sm:px-5 lg:px-8">

            {/* Navbar Start */}
            <div className="navbar-start gap-1">

                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="
                            btn
                            btn-ghost
                            btn-sm
                            sm:btn-md
                            px-2
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="
                            menu
                            menu-sm
                            dropdown-content
                            bg-base-100
                            rounded-box
                            z-50
                            mt-3
                            w-60
                            p-3
                            shadow-lg
                        "
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className="
                        btn
                        btn-ghost
                        px-1
                        sm:px-2
                        text-xl
                    "
                >
                    <Logo />
                </Link>
            </div>


            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                    {links}
                </ul>
            </div>


            {/* Navbar End */}
            <div className="navbar-end gap-2">

                {/* Login / Logout */}
                {user ? (
                    <button
                        onClick={handleLogOut}
                        className="
                            btn
                            btn-ghost
                            btn-sm
                            sm:btn-md
                            font-medium
                            px-3
                            sm:px-4
                        "
                    >
                        Log Out
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="
                            btn
                            btn-ghost
                            btn-sm
                            sm:btn-md
                            font-medium
                            px-3
                            sm:px-4
                        "
                    >
                        Log In
                    </Link>
                )}

                {/* Be a Rider */}
                <Link
                    to="/rider"
                    className="
                        btn
                        btn-primary
                        btn-sm
                        sm:btn-md
                        font-medium
                        px-3
                        sm:px-5
                        text-black
                    "
                >
                    <span className="hidden sm:inline">
                        Be a Rider
                    </span>

                    <span className="sm:hidden">
                        Rider
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
