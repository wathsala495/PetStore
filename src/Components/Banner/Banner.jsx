import React from 'react'
import  Header from './../Header/Header'
import hero from './../../assets/images/hero.png'

const Banner = () => {
  return (
    

    //  <div className='w-[1440px] h-[695px] rounded-br-[40px] rounded-bl-[40px] bg-[#FCEED5] flex max-sm:flex-row' >
     <div className='w-full h-[695px] rounded-br-[40px] rounded-bl-[40px] bg-[#FCEED5] flex max-sm:flex-row' >
      
            <div>
            <div className='w-[161px] h-[48px] absolute top-[442px] left-[130px] rounded-[57px] border-[1.5px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px]flex border-[#003459]'>
               <div className='w-[73px] h-[24px]'> <p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#003459]'>View Intro</p></div>
               <div className='w-[24px] h-[24px]'></div>
            </div>
            <div className='w-[163px] h-[48px] absolute top-[442px] left-[311px] rounded-[57px] border-[1.5px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px] flex bg-[#003459]'>
              <div className='w-[92px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#FDFDFD]'>Explore Now</p></div>

            </div>
            </div>
           <div>
           <div className='w-[480px] h-[72px] absolute top-[336px] left-[130px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#242B33]'>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p></div>
            <div className='w-[452px] h-[60px] absolute top-[252px] left-[130px]'><p className='font-cutomfont font-[700] text-[46px] leading-[60px] text-[#002A48]'>Thousands more fun!</p></div>
            <div className='w-[465px] h-[68px] absolute top-[180px] left-[130px]'><p className='font-cutomfont font-[800] text-[60px] leading text-[#002A48]'>One more friend</p></div>
            </div>
            <div className='w-[944px] h-[693px] absolute top-[84px] left-[530px] z-40' ><img src={hero}/></div>
           
            <div className='w-[21.47px] h-[21.47px] absolute top-[223.64px] left-[727px] rounded-[6px] rotate-[43deg] bg-[#002A48]'></div>
            <div className='w-[27.5px] h-[27.5px] absolute top-[210.68px] left-[728px] rounded-[9px] rotate-[22.85deg] bg-[#F7DBA7]'></div>
            <div className='w-[14.63px] h-[14.63px] absolute top-[148px] left-[762.19px] rounded-[4px] rotate-[-20.79deg] bg-[#F7DBA7]'></div>
            <div className='w-[67.1px] h-[67.1px] absolute top-[163px] left-[140.6px] rounded-[20px] rotate-[-25.23deg] bg-[#F7DBA7]'></div>
            <div className='w-[635px] h-[635px] absolute top-[-697px] left-[-64.33px] rounded-[99px] rotate-[-25.23deg] bg-[#F7DBA7]'></div>
            <div className='w-[635px] h-[635px] absolute top-[564px] left-[438.33px] rounded-[99px] rotate-[-56.47deg] bg-[#F7DBA7] opacity-[0.4]'></div>
            <div className='w-[635px] h-[635px] absolute top-[180px] left-[865.67px] rounded-[99px] rotate-[-25.23deg] bg-[#F7DBA7] z-30'></div>
            <div className='w-[635px] h-[635px] absolute top-[268px] left-[699.22px] rounded-[99px] rotate-[-9.35deg] bg-[#003459] '></div>

            

     </div>
  )
}

export default Banner
