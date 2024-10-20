import React from 'react'

const Header = () => {
  return (
    
    
    <div className='fixed left-[205px] w-[1440px] h-[100px] flex justify-between pt-[28px] pr-[130px] pb-[28px]pl-[130px] z-40'>
      {/* frame 47 */}
      <div className='w-[529px] h-[40px] gap-[48px] flex'>
        {/* frame */}
        <div className='w-[115px] h-[40px]'>
           <div className='w-[114.47px] h-[26.84px]'>
            Monito
           </div>
        </div>
        {/* frame 2 */}
        <div className='w-[366px] h-[24px] flex gap-[10px]'>
          <div className='w-[44px] h-[24px]'><p className='font-customfont font-[700] text-[16px] leading-[24px] text-[#003459]'>Home</p></div>
          <div className='w-[71px] h-[24px]'><p className='font-customfont font-[700] text-[16px] leading-[24px] text-[#003459]'>Category</p></div>
          <div className='w-[46px] h-[24px]'><p className='font-customfont font-[700] text-[16px] leading-[24px] text-[#003459]'>About</p></div>
          <div className='w-[61px] h-[24px]'><p className='font-customfont font-[700] text-[16px] leading-[24px] text-[#003459]'>Contact</p></div>
          
        </div>

      </div>
      {/* frame 46 */}
      <div className='w-[615px] h-[44px] gap-[14px] flex'>
        {/* search */}
          <div className='w-[280px] h-[44px] rounded-[46px] pt-[12px] pr-[20px] pb-[12px] pl-[16px] gap-[12px] flex bg-[#FDFDFD]'>
            <div className='w-[20px] h-[20px]'></div>
            <div className='w-[153px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#99A2A5]'>Search something here!</p></div>
          </div>

          {/* button */}
          <div className='w-[203px] h-[44px] rounded-[57px] pt-[14px] pr-[18px] pb-[10px] pl-[10px] bg-[#003459]'>
          <div className='w-[147px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#FDFDFD]'>Join the community</p></div>
          </div>

          {/* vnc button */}
          <div className='w-[104px] h-[44px] pt-[10px] pr-[8px] pb-[8px] pl-[8px] gap-[4px] flex'>
             <div className='w-[60px] h-[23px] gap-[6px] flex'>
               <div className='w-[21px] h-[21px]'>
                <div className='w-[16px] h-[16px] absolute top-[2.5px] left-[3px]'></div>
               </div>
               <div className='w-[33px] h-[23px]'><p className='font-cutomfont font-[500] text-[16px] leading-[23px] text-[#002A48]'>VND</p></div>
             </div>

             <div className='w-[24px] h-[24px]'>
                  <div className='w-[6px] h-[3px] absolute top-[11px] left-[9px] border-[2px] text-[#002A48]'> &lt;</div>
             </div>
          </div>
      </div>
    </div>


  )
}

export default Header
