import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;