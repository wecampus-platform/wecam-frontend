import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

const Common: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Common;
