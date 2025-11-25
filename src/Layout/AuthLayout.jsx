import React from 'react';
import Logo from '../Components/Common/Logo';
import { Outlet } from 'react-router';
import authImg from '../../src/assets/authImage.png'

const AuthLayout = () => {
    return (
        <div>
            <div>
                <div className='ml-20 mt-10'><Logo></Logo></div>
            </div>
            <div className='flex'>
                <div className='w-1/2'>
                    <Outlet></Outlet>
                </div>
                <div className='w-1/2 bg-green-50 h-full'>
                    <img src={authImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AuthLayout;