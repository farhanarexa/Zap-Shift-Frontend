// J:\Faru PH Projects\zap-shift-client\src\Pages\Auth\Login.jsx
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            {/* Welcome Back Header */}
            <h1 className="text-5xl font-black mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-lg mb-6">Login with ZapShift</p>

            {/* Email Field */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ACC857]"
                />
            </div>

            {/* Password Field */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ACC857]"
                />
            </div>

            {/* Forgot Password Link */}
            <div className="mb-4">
                <a href="#" className="text-base text-[#71717A] hover:underline">Forget Password?</a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-primary hover:bg-[#b1cf58] text-black font-bold py-3 px-4 rounded-md transition-colors">
                Login
            </button>

            {/* Register Link */}
            <div className="mt-4 text-base text-[#71717A]">
                Don't have any account? <a href="register" className="text-[#8FA748] font-bold hover:underline">Register</a>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
                <div className="grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">Or</span>
                <div className="grow border-t border-gray-300"></div>
            </div>

            {/* Google Login Button */}
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
                <FcGoogle size={24} />
                Login with Google
            </button>
        </div>
    );
};

export default Login;