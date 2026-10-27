
// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { updateProfile } from "firebase/auth";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

// const Register = () => {
//   const { registerUser, googleSignIn } = useContext(AuthContext);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const result = await registerUser(data.email, data.password);

//       await updateProfile(result.user, {
//         displayName: data.name,
//         photoURL: data.photo,
//       });

//       console.log("User Created:", result.user);
//       reset();
//     } catch (error) {
//       console.log(error.code);
//       console.log(error.message);
//     }
//   };

//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Create Account
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="input input-bordered w-full"
//                 {...register("name", {
//                   required: "Name is required",
//                 })}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>

//             {/* Photo URL */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Photo URL</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your photo URL"
//                 className="input input-bordered w-full"
//                 {...register("photo", {
//                   required: "Photo URL is required",
//                 })}
//               />
//               {errors.photo && (
//                 <p className="text-red-500 text-sm">
//                   {errors.photo.message}
//                 </p>
//               )}
//             </div>

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
//                 <p className="text-red-500 text-sm">
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
//                   pattern: {
//                     value:
//                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
//                     message:
//                       "Must contain uppercase, lowercase, number and special character.",
//                   },
//                 })}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <button type="submit" className="btn btn-primary w-full">
//               Register
//             </button>
//           </form>

//           <div className="divider">OR</div>

//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//           >
//             <FcGoogle className="text-2xl" />
//             Continue with Google
//           </button>

//           <p className="text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-primary font-semibold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

// const Register = () => {
//   const { registerUser, googleSignIn } = useContext(AuthContext);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const profileImg = data.photo[0];

//     registerUser(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         //store the image and get the photo url
//         const formData = new FormData();
//         formData.append('image',profileImg)
//         //update user profile
//         reset();
//       })
//       .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Create Account
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="input input-bordered w-full"
//                 {...register("name", {
//                   required: "Name is required",
//                 })}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>

//             {/* Photo URL */}
//             <div>
//               <label className="label">
//                 <span className="label-text font-semibold">Photo URL</span>
//               </label>
//               <input
//                 type="file"
//                 placeholder="Enter your photo URL"
//                 className="file-input input-bordered w-full"
//                 {...register("photo",{required:true})}
//               />
//             </div>

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
//                 <p className="text-red-500 text-sm">
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
//                   pattern: {
//                     value:
//                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
//                     message:
//                       "Must contain uppercase, lowercase, number and special character.",
//                   },
//                 })}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Register Button */}
//             <button type="submit" className="btn btn-primary w-full">
//               Register
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="divider">OR</div>

//           {/* Google Login */}
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//           >
//             <FcGoogle className="text-2xl" />
//             Continue with Google
//           </button>

//           {/* Login Link */}
//           <p className="text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-primary font-semibold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
// import axios from "axios";

// const Register = () => {
//   const { registerUser, googleSignIn, updateUserProfile } =
//     useContext(AuthContext);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleRegistration = (data) => {
//     setLoading(true);
//     setError("");

//     console.log("after register", data.photo[0]);

//     const profileImg = data.photo[0];

//     registerUser(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);

//         // Store the image and get the photo URL
//         const formData = new FormData();
//         formData.append("image", profileImg);

//         const image_API_URL = `https://api.imgbb.com/1/upload?key=${
//           import.meta.env.VITE_IMAGE_HOST_KEY
//         }`;

//            axios.post(image_API_URL, formData)
//           .then((res) => {
//             //console.log("After Image Upload", res.data.data.url);
//             const photoURL = res.data.data.url;

//             //create user in database


//             const userProfile = {
//               displayName: data.name,
//               //photoURL: res.data.data.url,
//                photoURL: photoURL
//             };

//             // Update Firebase Profile
//             updateUserProfile(userProfile)
//               .then(() => {
//                 console.log("Profile Updated Successfully");
//                 reset();
//                 setLoading(false);
//               })
//               .catch((error) => {
//                 console.log("Profile Update Error:", error);
//                 setError(error.message);
//                 setLoading(false);
//               });
//           })
//           .catch((error) => {
//             console.log("Image Upload Error:", error);
//             setError(error.message);
//             setLoading(false);
//           });
//       })
//       .catch((error) => {
//         console.log("Register Error:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   // Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const result = await googleSignIn();
//       console.log(result.user);

//       alert("Google Login Successful!");
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center">
//             Create Account
//           </h2>

//           {error && (
//             <div className="alert alert-error mt-3">
//               <span>{error}</span>
//             </div>
//           )}

//           <form
//             onSubmit={handleSubmit(handleRegistration)}
//             className="space-y-4 mt-4"
//           >
//             {/* Name */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Full Name</span>
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="input input-bordered w-full"
//                 disabled={loading}
//                 {...register("name", {
//                   required: "Name is required",
//                 })}
//               />

//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>

//             {/* Photo */}
//             <div>
//               <label className="label">
//                 <span className="label-text">
//                   Profile Photo
//                 </span>
//               </label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 className="file-input file-input-bordered w-full"
//                 disabled={loading}
//                 {...register("photo", {
//                   required: "Photo is required",
//                 })}
//               />

//               {errors.photo && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.photo.message}
//                 </p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>

//               <input
//                 type="email"
//                 placeholder="example@gmail.com"
//                 className="input input-bordered w-full"
//                 disabled={loading}
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
//                 <span className="label-text">
//                   Password
//                 </span>
//               </label>

//               <input
//                 type="password"
//                 placeholder="******"
//                 className="input input-bordered w-full"
//                 disabled={loading}
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Minimum 6 characters required",
//                   },
//                   pattern: {
//                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
//                     message:
//                       "Must contain uppercase, lowercase and number",
//                   },
//                 })}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="loading loading-spinner"></span>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </form>

//           <div className="divider">OR</div>

//           {/* Google Login */}
//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//             disabled={loading}
//           >
//             <FcGoogle className="text-2xl" />
//             Continue with Google
//           </button>

//           <p className="text-center mt-5">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-primary font-semibold"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
// import axios from "axios";

// const Register = () => {
//   const { registerUser, googleSignIn, updateUserProfile } =
//     useContext(AuthContext);

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleRegistration = async (data) => {
//     try {
//       setLoading(true);
//       setError("");

//       // 1. Create Firebase User
//       await registerUser(data.email, data.password);

//       // 2. Upload Image to imgbb
//       const formData = new FormData();
//       formData.append("image", data.photo[0]);

//       const imageAPI = `https://api.imgbb.com/1/upload?key=${
//         import.meta.env.VITE_IMAGE_HOST_KEY
//       }`;

//       const imageRes = await axios.post(imageAPI, formData);

//       const photoURL = imageRes.data.data.url;

//       // 3. Update Firebase Profile
//       await updateUserProfile({
//         displayName: data.name,
//         photoURL,
//       });

//       reset();
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       await googleSignIn();

//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
//       <div className="card w-full max-w-md bg-base-100 shadow-xl">
//         <div className="card-body">
//           <h2 className="text-3xl font-bold text-center">
//             Create Account
//           </h2>

//           {error && (
//             <div className="alert alert-error mt-3">
//               <span>{error}</span>
//             </div>
//           )}

//           <form
//             onSubmit={handleSubmit(handleRegistration)}
//             className="space-y-4 mt-4"
//           >
//             {/* Name */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Full Name</span>
//               </label>

//               <input
//                 type="text"
//                 className="input input-bordered w-full"
//                 placeholder="Enter your name"
//                 disabled={loading}
//                 {...register("name", {
//                   required: "Name is required",
//                 })}
//               />

//               {errors.name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.name.message}
//                 </p>
//               )}
//             </div>

//             {/* Photo */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Profile Photo</span>
//               </label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 className="file-input file-input-bordered w-full"
//                 disabled={loading}
//                 {...register("photo", {
//                   required: "Photo is required",
//                 })}
//               />

//               {errors.photo && (
//                 <p className="text-red-500 text-sm">
//                   {errors.photo.message}
//                 </p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>

//               <input
//                 type="email"
//                 className="input input-bordered w-full"
//                 placeholder="Enter your email"
//                 disabled={loading}
//                 {...register("email", {
//                   required: "Email is required",
//                 })}
//               />

//               {errors.email && (
//                 <p className="text-red-500 text-sm">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>

//               <input
//                 type="password"
//                 className="input input-bordered w-full"
//                 placeholder="******"
//                 disabled={loading}
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Minimum 6 characters required",
//                   },
//                   pattern: {
//                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
//                     message:
//                       "Must contain uppercase, lowercase and number",
//                   },
//                 })}
//               />

//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="loading loading-spinner"></span>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </form>

//           <div className="divider">OR</div>

//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//             disabled={loading}
//           >
//             <FcGoogle className="text-2xl" />
//             Continue with Google
//           </button>

//           <p className="text-center mt-5">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-primary font-semibold"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router'; 
import SocialLogin from '../../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const handleRegistration = (data) => {

        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
            .then(() => {

                // 1. store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                // 2. send the photo to store and get the ul
            
                 const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;
                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // create user in the database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        axiosSecure.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                console.log('user created in the database');
                            }
                        })


                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: photoURL
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })



            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center">Welcome to Zap Shift</h3>
            <p className='text-center'>Please Register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    {/* name field */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}

                    {/* photo image field */}
                    <label className="label">Photo</label>

                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Photo" />

                    {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}

                    {/* email field */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>
                            Password must be 6 characters or longer
                        </p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account <Link
                    state={location.state}
                    className='text-blue-400 underline'
                    to="/login">Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;