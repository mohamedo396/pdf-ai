
import React from "react";
import SideBar from "@/app/dashboard/_components/SideBar";
import Header from "@/app/dashboard/_components/Header";

function DashboardLayout({children}) {
    return (
        <div>
           <div className='md:w-64 h-screen fixed'>
               <SideBar/>
           </div>
            <div className='md:ml-64'>
                <Header/>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;