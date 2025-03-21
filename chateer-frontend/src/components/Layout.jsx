import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Login from './Login';
const Layout = () => {
  return (
    <div className='relative'>
      <Header />
      <main className='mb-16'>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;
