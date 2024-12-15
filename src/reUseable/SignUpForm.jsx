import { FaLongArrowAltRight } from "react-icons/fa";

const SignUpForm = () => {
    return (
        <div className=" dark:bg-gray-900 w-full flex justify-center items-center">
            <div
                className="w-full p-6 mx-auto rounded-lg"
                style={{
                    backgroundColor: 'rgba(56, 56, 56, 0.2)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <h1 className="text-center text-xl font-semibold text-white mb-6">
                    Sign up with email
                </h1>
                <form>
                    {/* Name Input */}
                    <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-1 lg:gap-6">
                        <div className="mt-4 w-full">
                            <label
                                htmlFor="name"
                                className="block mb-2 font-bold text-white"
                            >
                                First name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your first name"
                                className="block pr-20 w-full font-light px-4 py-2 text-gray-700 placeholder-white bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-4 w-full">
                            <label
                                htmlFor="name"
                                className="block mb-2 font-bold text-white"
                            >
                                Last name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your last name"
                                className="block pr-20 font-light w-full px-4 py-2 text-gray-700 placeholder-white bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 font-bold text-white"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            className="block w-full font-light px-4 py-2 text-gray-700 placeholder-white bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 font-bold text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="block w-full font-light px-4 py-2 text-[#EAECF0] placeholder-white bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg dark:bg-none dark:text-[#EAECF0] dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                    </div>

                    {/* Already Have an Account */}
                    <p className="mt-6 text-sm text-center text-white">
                        You are already member <span className="underline  font-bold">log in</span>
                    </p>

                    {/* Sign Up Button */}
                    <div className="mt-6">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 tracking-wide bg-primary text-white rounded-xl">
                            Sign up <FaLongArrowAltRight />
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignUpForm;
