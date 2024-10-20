
import img1 from './../../img/img1.jpeg'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import PetCard from '../PetCard/PetCard';

const Pets = () => {

   const [petsData,setPetsData]=useState([])

useEffect(()=>{
   axios
   .get("https://monitor-backend-rust.vercel.app/api/pets")
   .then((res)=>{
    if(res){
        console.log(res.data)
        setPetsData(res.data)
    }
    else{
        console.log("no data")
    }
   }).catch((error)=>{
    console.error("There was an error!", error);
   })
},[])

  return (


    <div className='w-[1440px] h-[986px] absolute top-[695px] bg-white z-[40]'>
      <div className='w-[151px] h-[44px] absolute top-[78px] left-[1159px] rounded-[57px] border-[1.5px] py-[12px] px-[28px] gap-[8px] border-[#003459] flex'>
      <div className='w-[67px] h-[20px] '>
        <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#003459]'>View more </p>
       </div>
       <div className='w-[20px] h-[20px]'>
         {/* arrow */}
       </div>
      </div>

      <div className='w-[367px] h-[62px] absolute top-[60px] left-[130px] gap-[2px] flex flex-col'>
         <div className='w-[91px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#000000]'>Whats new?</p></div>
         <div className='w-[367px] h-[36px]'><p className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#003459]'>Take a look at some of our pets</p></div>
      </div>
      



       <div className='grid grid-cols-4 gap-x-[20px]  gap-y-[20px] absolute left-[130px] top-[150px] max-[415px]:grid-cols-2'>
        
         <PetCard petsData={petsData}/>
       </div>
    </div>
  )
}

export default Pets

