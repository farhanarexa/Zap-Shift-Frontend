import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;