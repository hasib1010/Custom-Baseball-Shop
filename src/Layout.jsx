import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
}


export default Layout;