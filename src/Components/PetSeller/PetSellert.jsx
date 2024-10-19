import React from 'react'
import sheba from './../../assets/images/sheba.png'
import whiscas from './../../assets/images/whiscas.png'
import bakers from './../../assets/images/bakers.png'
import felix from './../../assets/images/felix.png'
import goodboy from './../../assets/images/goodboy.png'
import butchers from './../../assets/images/butchers.png'
import pidegree from './../../assets/images/pidegree.png'

const PetSellert = () => {
  return (
    <div className='w-[1438px] h-[251px] absolute top-[3181px] pt-[40px] pr-[130px] pb-[40px] pl-[130px] gap-[15px] flex flex-col'>
        <div className='w-[1178] h-[44px] flex justify-between'>
            <div className='w-[226px] h-[36px] gap-[8px] flex'>
                 <div className='w-[141px] h-[31px]'><p className='font-cutomfont font-[500] text-[16px] leading-[31px] text-[#000000]'>Proud to be part of</p></div>
                 <div className='w-[117px] h-[36px] '><p className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#003459]'>Pet Sellers</p></div>
            </div>
            <div className='w-[201px] h-[44px] rounded-[57px] border-[1.5px] pt-[12px] pr-[28px] pb-[12px] pl-[28px] gap-[8px] flex'>

                    <div className='w-[117px] h-[20px]'>
                        <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#003459]'>View all our sellers</p>
                    </div>
            </div>
        </div>
        {/* <div className='w-[1180px] h-[112px] flex gap-[20px] items-center mt-3'> */}
        <div className='w-[1180px] h-[112px] flex gap-[20px] '>
              <div className='w-[151.43px] h-[112px]  px-4 gap-[10px]'>
                <img src={sheba} alt="" className='w-[88px] h-[64px]'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
                <img src={whiscas} alt="" className='w-[114px] h-[114px'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px]  gap-[10px]'>
                <img src={bakers} alt="" className='w-[104px] h-[46px]'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
                <img src={goodboy} alt="" className='w-[92px] h-[64px]'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px]  gap-[10px]'>
                <img src={sheba} alt="" className='w-[92px] h-[92px]'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px]  gap-[10px]'>
                <img src={butchers} alt="" className='w-[130px] h-[56px]'/>
              </div>
              <div className='w-[151.43px] h-[112px] p-[10px] gap-[10px]'>
                <img src={pidegree} alt="" className='w-[116px] h-[72px]'/>
              </div>
            
              
        </div>
    </div>
  )
}

export default PetSellert
