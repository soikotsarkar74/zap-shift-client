

// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

// const Login = () => {
//   const { signInUser, googleSignIn } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get the page user wanted to visit before login
//   const from = location.state?.from?.pathname || "/";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Email & Password Login
//   const onSubmit = (data) => {
//     signInUser(data.email, data.password)
//       .then((result) => {
//         console.log("Login Success:", result.user);
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.log("Login Error:", error.message);
//       });
//   };

//   // Google Login
//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log("Google Login Success:", result.user);
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         console.log("Google Login Error:", error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Welcome Back
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//             {/* Email */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Email</span>
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full"
//                 {...register("email", {
//                   required: "Email is required",
//                 })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Password</span>
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <button
//                 type="button"
//                 className="text-sm text-primary hover:underline"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button type="submit" className="btn btn-primary w-full">
//               Login
//             </button>

//             {/* Divider */}
//             <div className="divider">OR</div>

//             {/* Google Login */}
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition duration-200 shadow-sm"
//             >
//               <FcGoogle className="text-2xl" />
//               Continue with Google
//             </button>

//             {/* Register Link */}
//             <p className="text-center text-sm mt-4">
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Register
//               </Link>
//             </p>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

// const Login = () => {
//   const { signInUser, googleSignIn, resetPassword } =
//     useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const email = watch("email");

//   // Email & Password Login
//   const onSubmit = (data) => {
//     signInUser(data.email, data.password)
//       .then((result) => {
//         console.log("Login Success:", result.user);

//         Swal.fire({
//           icon: "success",
//           title: "Login Successful",
//           timer: 1500,
//           showConfirmButton: false,
//         });

//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: error.message,
//         });
//       });
//   };

//   // Google Login
//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log("Google Login Success:", result.user);

//         Swal.fire({
//           icon: "success",
//           title: "Google Login Successful",
//           timer: 1500,
//           showConfirmButton: false,
//         });

//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Google Login Failed",
//           text: error.message,
//         });
//       });
//   };

//   // Forgot Password
//   const handleForgotPassword = () => {
//     if (!email) {
//       Swal.fire({
//         icon: "warning",
//         title: "Email Required",
//         text: "Please enter your email address first.",
//       });
//       return;
//     }

//     resetPassword(email)
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Reset Email Sent",
//           text: "Please check your email to reset your password.",
//         });
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Reset Failed",
//           text: error.message,
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Welcome Back
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             {/* Email */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Email</span>
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full"
//                 {...register("email", {
//                   required: "Email is required",
//                 })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Password</span>
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <button
//                 type="button"
//                 onClick={handleForgotPassword}
//                 className="text-sm text-primary hover:underline"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button type="submit" className="btn btn-primary w-full">
//               Login
//             </button>

//             {/* Divider */}
//             <div className="divider">OR</div>

//             {/* Google Login */}
//             <button
//               type="button"
//               onClick={handleGoogleLogin}
//               className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition duration-200 shadow-sm"
//             >
//               <FcGoogle className="text-2xl" />
//               Continue with Google
//             </button>

//             {/* Register Link */}
//             <p className="text-center text-sm mt-4">
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-primary font-semibold hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

const Login = () => {
  const { signInUser, googleSignIn, resetPassword } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch("email");

  // Email & Password Login
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log("Login Success:", result.user);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google Login Success:", result.user);

        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  // Forgot Password
  const handleForgotPassword = () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address first.",
      });
      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reset Email Sent",
          text: "Please check your email to reset your password.",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Reset Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-3 sm:px-4 py-6 sm:py-8 md:py-12">
      <div className="card w-full max-w-md sm:max-w-lg md:max-w-md bg-base-100 shadow-2xl rounded-xl sm:rounded-2xl mx-2 sm:mx-0">
        <div className="card-body p-4 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sm sm:text-base">Email</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full input-sm sm:input-md text-sm sm:text-base"
                {...register("email", {
                  required: "Email is required",
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sm sm:text-base">Password</span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full input-sm sm:input-md text-sm sm:text-base"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs sm:text-sm text-primary hover:underline transition duration-200"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="btn btn-primary w-full btn-sm sm:btn-md text-sm sm:text-base transition duration-200"
            >
              Login
            </button>

            {/* Divider */}
            <div className="divider my-2 sm:my-3 text-xs sm:text-sm">OR</div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition duration-200 shadow-sm text-sm sm:text-base"
            >
              <FcGoogle className="text-xl sm:text-2xl" />
              <span className="hidden xs:inline">Continue with Google</span>
              <span className="xs:hidden">Google</span>
            </button>

            {/* Register Link */}
            <p className="text-center text-xs sm:text-sm mt-3 sm:mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline transition duration-200"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;