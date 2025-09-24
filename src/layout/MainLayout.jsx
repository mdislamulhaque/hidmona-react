import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/shared/Navbar'
import Footer2 from '../components/shared/Footer2';


export default function MainLayout() {
  return ( 
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer2 />
    </div>
  );
}
