// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import { VscGithubInverted } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {

  const handleCreateUser = () => {

  }

  const handleGoogleLogin = () => {

  }

  const handleGithubLogin = () => {

  }

    return (
        <>
            <div
                className="min-h-[85vh] mx-4 my-10 rounded-lg text-[#F5E9CF] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'url("https://i.ibb.co/VYcwFJy/8843-1.jpg")' }}
            >
                <div className="bg-black p-8 rounded shadow-md w-96 backdrop-filter backdrop-blur-lg bg-opacity-10">
                    <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                            <Helmet>
                                <title>
                                    Voxly | Sign up
                                </title>
                            </Helmet>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Photo
                            </label>
                            <input
                                type="file"
                                name="photo"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-[#F5E9CF] text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#4D455D] text-white px-4 py-2 rounded-md hover:bg-[#455a5d] focus:outline-none focus:shadow-outline-blue"
                        >
                            Sign Up
                        </button>
                        <div className="flex mt-5 justify-between text-white">
                            <p>Have an account? <Link className="text-green-500 underline text-lg" to='/login'>login</Link></p>
                        <div className="flex">
                        <button
                            onClick={handleGoogleLogin}
                            className=" text-[#F5E9CF] py-2 px-4 rounded-md  focus:outline-none focus:bg-[#DC8686]"
                        >
                            <FcGoogle></FcGoogle>
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className="w-full text-[#F5E9CF] py-2 px-4 rounded-md focus:outline-none"
                        >
                            <VscGithubInverted />
                        </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;