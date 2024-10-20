import React from 'react'
import pethand from './../../assets/images/pethand.png'

const Adoption = () => {
  return (
    <>
    < div className='absolute top-[3000px]' >
     {/* <div className='w-[1180px] h-[378px] absolute top-[3432px] left-[1310px] rounded-[20px] rotate-[-180deg] bg-[#FFB775]'> */}
     <div className='w-[1180px] h-[378px] absolute  left-[130px] rounded-[20px] rotate-[-180deg] bg-[#FFB775]'>
        <div className='w-[782.29px] h-[635px] absolute top-[-360px] left-[403.67px] rounded-[99px] rotate-[-154.77deg] bg-[#FCEED5]'>
           
        </div>
      
    </div>
    <div className='absolute  left-[750.48px] w-[538.53px] h-[358.70px] rotate-[125.93deg]'>
       <img src={pethand} alt="" />
    </div>
    </div>
    {/* <div className='w-[225px] h-[68px] absolute top-[3496px] left-[191.5px]'> */}
    <div className='w-[225px] h-[68px] absolute top-[3100px] left-[191.5px]'>
            <h3 className='font-cutomfont font-[800] text-[52px] leading-[68px] text-[#003459]'>Adoption</h3>
           </div>
           {/* leg */}
    <div className='w-[42px] h-[38px]'>
       <div></div>

    </div>

    {/* <div className=' absolute left-[191.5px] top-[3566px]'> */}
    <div className=' absolute left-[191.5px] top-[3170px]'>
      <p className='font-cutomfont font-[700] text-[36px] leading-[54px] text-[#003459]'>We need help. so do they.</p>
    </div>

    {/* <div className='absolute top-[3628px] left-[200px]'> */}
    <div className='absolute top-[3232px] left-[200px]'>
      <p className='font-cutomfont font-[500] text-[12px] leading-[18px] text-[#242B33]'>Adopt a pet and give it a home,
      it will be love you back unconditionally.</p>
    </div>
    {/* <div className='absolute top-[3706px] left-[199.5px] w-[163px] h-[48px] rounded-[57px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] bg-[#003459]'> */}
    <div className='absolute top-[3310px] left-[199.5px] w-[163px] h-[48px] rounded-[57px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] bg-[#003459]'>
      <div className='w-[92px] h-[24px]'>
        <button className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#FDFDFD]'>Explore Now</button>
      </div>

    </div>
    {/* <div className='absolute top-[3706px] left-[382.5px] w-[161px] h-[48px] rounded-[57px] border-[1.5px] border-[#003459] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px]'> */}
    <div className='absolute top-[3310px] left-[382.5px] w-[161px] h-[48px] rounded-[57px] border-[1.5px] border-[#003459] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[8px]'>
       <div className='w-[73px] h-[24px] '>
         <p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#003459]'>View Intro</p>
       </div>
    </div>

    
    {/* <div className='absolute top-[3500.98px] left-[750.48px] w-[538.53px] h-[358.70px] rotate-[125.93deg]'> */}
    </>
  
   
  )
}

export default Adoption
