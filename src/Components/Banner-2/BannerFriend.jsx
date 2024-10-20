import React from 'react'
import banner_img_2 from './../../assets/images/banner_img_2.png'
const BannerFriend = () => {
  return (
    // <div className='w-[1180px] h-[378px] absolute top-[1681px] left-[130px] rounded-[20px] '>
    <div className='w-[1180px] h-[378px] absolute top-[1681px] left-[130px] rounded-[20px]  bg-[#003459] z-10'>
      <div className='w-[513px] h-[342px] absolute top-[36px] left-[20px] z-40'>
         <img src={banner_img_2} alt="" />
      </div>
      <div className='w-[161px] h-[48px] absolute top-[274px] left-[764px] rounded-[57px] border-[1.5px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] border-[#003459] z-30'>
             <div className='w-[73px] h-[24px] '><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#003459]'>View Intro</p></div>
     </div>
     <div className='w-[163px] h-[48px] absolute top-[274px] left-[945px] rounded-[57px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px] bg-[#003459] z-30' >
             <div className='w-[92px] h-[24px] font-[cutomfont] font-[500] text-[16px] leading-[24px] text-[#FDFDFD]'>
             Explore Now
             </div>
    </div>
    <div className='w-[394px] h-[54px] absolute top-[196px] left-[701px] z-30'>
            <p className='font-cutomfont font-[500] text-[12px] leading-[18px] text-align-right '>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
    </div>
    <div className='w-[354px] h-[54px] absolute top-[134px] left-[741px] z-30'><p className=' font-cutomfont font-[700] text-[36px] leading-[54px] text-[#003459]'>Thousands more fun!</p></div>

    <div className='w-[403px] h-[68px] absolute top-[64px] left-[692px] z-30'><h2 className='font-cutomfont font-[800] text-[52px] leading-[68px] text-[#003459]'>One more friend</h2></div>
    <div className='w-[787.54px] h-[787.54px] absolute top-[28.72px] left-[41.49px] rounded-[99px] rotate-[-28.25deg] bg-[#002A48] z-20'>
    </div> 
    <div className='w-[782.29px] h-[635px] absolute top-[-360px] left-[776.67px] rounded-[99px] rotate-[-25.23deg] bg-[#FCEED5] z-20'></div>
    
    
    </div>
  )
}

export default BannerFriend
