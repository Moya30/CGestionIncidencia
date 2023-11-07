import Navbar from "../../components/Navbar/Index";
import React from 'react'
import { useOutletContext } from 'react-router-dom';

export const ReporteUser = () => {
    const [sidebarToggle] = useOutletContext();
  return (
    <>
    
    <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
         
        </div>
      </main>
    
    </>
  )
}
