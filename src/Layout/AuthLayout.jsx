import React from 'react';
import Logo from '../Components/Common/Logo';
import { Outlet } from 'react-router';
import authImg from '../../src/assets/authImage.png'

const AuthLayout = () => {
    return (
         <div className="h-screen flex flex-col">
            {/* Top Bar with Logo */}
            <div className="p-6"> 
                <Logo />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Side: Form Content */}
                <div className="w-1/2 flex items-center justify-center bg-white">
                    <Outlet />
                </div>

                {/* Right Side: Image */}
                <div className="w-1/2 bg-[#FAFDF0] flex items-center justify-center">
                    <img 
                        src={authImg} 
                        alt="Authentication illustration" 
                        className="max-w-full max-h-full object-contain p-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;