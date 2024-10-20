import React from 'react'

const Header = () => {
  return (
    // <div className='w-[1440px] fixed h-[100px] justify-between pt-[28pxpx] pr-[130.6px] pb-[28px] pl-[130px] bg-[#F7DBA7] flex items-center'>
    //  {/* frame 47 */}
    //  <div className='flex gap-[48px] w-[529px]  h-[40px]'>
    //     <div className='w-[115px] h-[40px]'>
    //       Monito
    //     </div>
    //     <div className='w-[359.35px] h-[24px] gap-[47.12px] flex list-none'>
    //         <li>Home</li>
    //         <li>Category</li>
    //         <li>About</li>
    //         <li>Contact</li>

    //     </div>
    //  </div>

    //  <div className='flex gap-[11.78px]'>
    //      <div >
    //         {/* search */}
    //         <input type="text" placeholder='Search'  className='rounded-[45.15px] w-[274.84px] h-[43.56px] pt-[11.78px] pr-[19.63px] pb-[11.78px] pl-[15.71px]  bg-[#FDFDFD]'
    //        />
    //      </div>
    //      <div>
    //       <button className=' w-[199.97px] h-[43.19px] rounded-[55.95px] pt-[13.74px] pr-[27.48px] pb-[9.82px] pl-[27.48px] bg-[#003459] font-custombold text-[15.71px] text-[#FDFDFD]'>Join the community</button>
    //      </div>
    //      <div className='w-[101.69px] h-[43.56px] pt-[9.82px] pr-[7.85px] pb-[7.85px] pl-[7.85px]'>
    //        <div className='w-[32px] h-[23px] font-cutomfont'>
    //         VND
    //        </div>
    //      </div>
    //  </div>

     
    // </div>
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
