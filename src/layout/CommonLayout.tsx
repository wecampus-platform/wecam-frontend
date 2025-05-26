import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Nav';
import Footer from '../components/common/Footer';


type Props = {
  
};

const CommonLayout = ({}: Props) => {
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

export default CommonLayout;