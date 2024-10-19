import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const MainLayout = () => {
  return (
    <div  className=' w-full h-[4794px] top-[828px] left-[273.27px] rounded-[49.08px] border-[7.85px] border-[#FFFFFF] shadow-custom bg-[ #FDFDFD]'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout
