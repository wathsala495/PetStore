import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import dogs from './../../assets/images/dogs.png'
import pet1 from './../../assets/images/pet1.png'
import PetCard from './../../Components/PetCard/PetCard'
import axios from "axios";
import Footer from '../../Components/Footer/Footer'

const PetList = () => {
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
    <div className='w-[1440px] h-[3119px] absolute '>
      
        {/* header start */}

        {/* <Header/> */}
    {/* header end */}

       {/* home dog start */}
       <div className='w-[204px] h-[24px] absolute top top-[107px] left-[130px] gap-[6px] flex bg-[white]'>
            <div className='w-[38px] h-[20px]'><p className='font-customfont text-[14px] font-[500] leading-[20px] text-[#667479]'>Home</p></div>
            <div className='w-[24px] h-[24px] gap-[10px]'>&gt;</div>
            <div className='w-[28px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Dog</p></div>
            <div className='w-[24px] h-[24px] gap-[10px]'>&gt;</div>
            <div className='w-[66px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Small Dog</p></div>

       </div>

       {/* banner start */}

       <div className='w-[1180px] h-[378px] absolute top-[140px] left-[130px] rounded-[20px] bg-[#FCEED5] '>
        <div className='grid grid-cols-2 max-[414px]:grid:cols-1'>
        <div className='div1'>
       <img src={dogs} alt="" className='w-[650px] h-[301px] absolute top-[77px] left-[51px]'/>
       </div>
         {/* <div className='w-[816.4px] h-[799.52px] absolute top-[-164px] left-[1167.23px] rounded-[99px] rotate-[-160.22deg] bg-[#002A48]'>

         </div> */}
         <div className='div2'>
         <div className='w-[161px] h-[48px] absolute top-[274px] left-[764px] rounded-[57px] border-[1.5px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px] flex  border-[#FDFDFD]'>
            <div className='w-[73px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px]'>View Intro</p></div>
         </div>
         <div className='w-[163px] h-[48px] absolute top-[274px] left-[945px] rounded-[57px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] bg-[#FDFDFD] gap-[10px]'>
            <div className='w-[92px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#00171F]'>Explore Now</p></div>

         </div>

         <div className='w-[394px] h-[54px] top-[196px] left-[701px] absolute'>
            <p className='font-cutomfont font-[500] text-[12px] leading-[18px] text-right text-[#CCD1D2]'>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
         </div>
         <div className='w-[354px] h-[54px] absolute top-[134px] left-[741px]'>
            <p className='font-cutomfont font-[700] text-[36px] leading-[54px] text-[#FDFDFD]'>Thousands more fun!</p>
         </div>

         <div className='w-[403px] h-[68px] top-[64px] left-[692px] absolute'>
            <p className='font-cutomfont font-[800] text-[52px] leading-[68px] text-[#FDFDFD]'>One more friend</p>
         </div>
         </div>
        </div>
       
        

       </div>
       {/* banner end */}

       <div className='w-[114px] h-[36px] absolute top-[553px] left-[430px] gap-[2px]'>
           <div className='w-[114px] h-[36px]'><p className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#003459]'>Small Dog</p></div>
       </div>
       {/* filter start */}
       <div className='w-[280px] h-[572px] absolute top-[603px] left-[130px] max-[414px]:hidden'>
          <div className='w-[280px] h-[98px] border-b-[1px] pb-[16px] gap-[10px] flex flex-col'>
               <div className='w-[57px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Gender</p></div>

               <div className='w-[74px] h-[48px] gap-[8px] flex flex-col '>
                   <div className='w-[58px] h-[20px] gap-[10px] flex'>
                       <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF] border-[#CCD1D2]'></div>
                        <div className='w-[32px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Male</p></div>
                   </div>
                   
               </div>
               <div className='w-[74px] h-[48px] gap-[8px] flex flex-col '>
                   <div className='w-[58px] h-[20px] gap-[10px] flex'>
                       <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF] border-[#CCD1D2]'></div>
                        <div className='w-[32px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Female</p></div>
                   </div>
                   
               </div>
          </div>
          <div className='w-[280px] h-[98px] border-b-[1px] pb-[16px] gap-[10px] border-[1px] border-[#EBEEEF] flex flex-col'>
            <div className='w-[41px] h-[24px] '><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Color</p></div>
             <div className='w-[141px] h-[160px] gap-[8px] flex-col'> 
                 <div className='w-[77px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-[#FF564F]'></div>
                     <div className='w-[26px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Red</p></div>
                 </div>

                 <div className='w-[98px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-[#FFB672]'></div>
                     <div className='w-[47px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Apricot</p></div>
                 </div>

                 <div className='w-[87px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-[#242B33]'></div>
                     <div className='w-[36px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Black</p></div>
                 </div>

                 <div className='w-[141px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-gradient-to-r from-customDark via-customGrayLight to-customGrayDark'></div>
                     <div className='w-[26px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Black & White</p></div>
                 </div>

                 <div className='w-[86px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-[#CECECE]'></div>
                     <div className='w-[26px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Silver</p></div>
                 </div>
                
                 <div className='w-[75px] h-[20px] gap-[10px] flex'>
                     <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF]  border-[#CCD1D2]'></div>
                     <div className='w-[15px] h-[15px] rounded-[10px] bg-[#FFF7CE]'></div>
                     <div className='w-[26px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Tan</p></div>
                 </div>
                

                 </div>
          </div>

          <div className='w-[280px] h-[98px] border-b-[1px] pb-[16px] gap-[10px] flex flex-colborder-[1px] border-[#EBEEEF]'>
            <div className='w-[37px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Price</p></div>
            <div className='w-[280px] h-[40px] flex justify-between'>
                <div className='w-[135px] h-[40px] border-b-[1px] p-[10px] gap-[10px]'>
                    <div className='w-[115px] h-[20px] flex justify-between'>
                        <div className='w-[23px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#242B33]'>Min</p></div>
                        <div className='w-[14px] h-[14px]'>
                            {/* arrow icon */}
                        </div>
                    </div>
                </div>
                <div className='w-[135px] h-[40px] border-b-[1px] p-[10px] gap-[10px]'>
                    <div className='w-[115px] h-[20px] flex justify-between'>
                        <div className='w-[23px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#242B33]'>Max</p></div>
                        <div className='w-[14px] h-[14px]'>
                            {/* arrow icon */}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className='w-[280px] h-[142px] border-b-[1px] pb-[16px] gap-[10px] flex flex-col'>
            <div className='w-[44px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Breed</p></div>
            <div className='w-[78px] h-[76px] gap-[8px] flex-flex-col'>
                    <div className='w-[61px] h-[20px] gap-[10px] flex'>
                        <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF] border-[#CCD1D2]' ></div>
                        <div className='w-[35px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Small</p></div>
                    </div>
            </div>

            <div className='w-[78px] h-[76px] gap-[8px] flex-flex-col'>
                    <div className='w-[61px] h-[20px] gap-[10px] flex'>
                        <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF] border-[#CCD1D2]' ></div>
                        <div className='w-[35px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Medium</p></div>
                    </div>
            </div>

            <div className='w-[78px] h-[76px] gap-[8px] flex-flex-col'>
                    <div className='w-[61px] h-[20px] gap-[10px] flex'>
                        <div className='w-[16px] h-[16px] rounded-[4px] border-[1px] bg-[#FFFFFF] border-[#CCD1D2]' ></div>
                        <div className='w-[35px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#00171F]'>Large</p></div>
                    </div>
            </div>
          </div>
       </div>

       {/* card list */}
       <div className='grid grid-cols-3 gap-x-[20px] gap-y-[18px] absolute top-[603px] left-[430px] max-[414px]:grid-cols-2'>
        <PetCard petsData={petsData}/>
        
        
          
       </div>
       {/* <Footer/> */}
    </div>
  )
}

export default PetList
