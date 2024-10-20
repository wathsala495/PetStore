import React, { useEffect, useState } from 'react'
import dog from './../../assets/images/dog.png'
import img1 from './../../assets/images/img1.png'
import img2 from './../../assets/images/img2.png'
import img3 from './../../assets/images/img3.png'
import img4 from './../../assets/images/img4.png'
import img5 from './../../assets/images/img5.png'
import img6 from './../../assets/images/img6.png'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ProductDetails = () => {
  const {id}=useParams()
  // console.log(id)
     
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

let selectedPet = petsData.find(item => item.id ===id );
   console.log(selectedPet)

  return (
    <>
      {/* <Header/> */}
    <div className='w-[1440px] h-[2401] absolute   bg-[#FDFDFD]'>
        {/* header */}
     
       {/* deatils */}
      
       <div className='w-[1440px] h-[2358px] absolute top-[200px] gap-[20px] pt-[100px]'></div>
       <div className='w-[1180px] h-[826px] rounded-[20px] border-[1px] pt-[22px] pr-[20px] pb-[22px] pl-[20px] gap-[34px] flex bg-[#FDFDFD] border-[#EBEEEF]'>
           <div className='w-[560px] h-[706px] gap-[17px]'>
               <div className='w-[565px] h-[592px]'>
                  {/* frame 91 */}
                <div className='w-[42px] h-[42px] absolute top-[226px] left-[544px] rounded-[20px] gap-[10px] rotate-[-180deg] bg-[#FFFFFF66]'>
                  <div className='w-[52px] h-[52px] rotate-[-180deg]'>
                    <div className='w-[6.5px] h-[13px] absolute top-[19.5px] left-[30.33px] border-[3px] rotate-[-180deg] border-[#FFFFFF]'></div>
                  </div>
                  
                </div>
                 {/* frame 90 */}
                 <div className='w-[42px] h-[42px] absolute top-[226px] left-[16px] rounded-[20px] gap-[10px]'>
                 <div className='w-[52px] h-[52px] '>
                    <div className='w-[6.5px] h-[13px] absolute top-[19.5px] left-[21.67px] border-[3px]  border-[#FFFFFF]'></div>
                  </div>
                  
                 </div>
                 {/* frame 89 */}
                 <div className='w-[560px] h-[94px] absolute top-[488px]'>
                   <div className='w-[624px] h-[94px] gap-[12px] flex'>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092]' ><img src={img1} alt="" /></div>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092] bg-[#00000033]' ><img src={img2} alt="" /></div>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092]  bg-[#00000033]' ><img src={img3} alt="" /></div>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092]  bg-[#00000033]' ><img src={img4} alt="" /></div>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092]  bg-[#00000033]' ><img src={img5} alt="" /></div>
                         <div className='w-[94px] h-[94px] rounded-[6px] border-[3px] border-[#F1D092]  bg-[#00000033]' ><img src={img6} alt="" /></div>
                   </div>
                 </div>
                 {/* section */}
                 <div className='w-[560px] h-[476px] rounded-[10px]'>
                  {/* <img src={dog} alt="" /> */}
                    {/* swipper */}
                  <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
       
      >
        <SwiperSlide><img src={img1} alt=""  className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" className='w-full'/></SwiperSlide>
        
      </Swiper>
    </>
                 </div>
               
               
                 
               </div>
           </div>
              

               {/* flame 115 */}

           <div className='w-[517px] h-[782px] gap-[18px] flex flex-col bg-[white] z-40'>
                      {/* frame 88 */}
                        <div className='w-[343px] h-[24px] gap-[6px] flex'>
                          <div className='w-[38px] h-[20px]'><p className='font-cutomfont font-[500px] text-[14px] leading-[20px] text-[#667479]'>Home</p></div>
                          <div className='w-[24px] h-[24px] gap-[10px] flex'>
                            <div className='w-[24px] h-[24px]'>
                              <div className='w-[3px] h-[6px] absolute  border-[1.5px] border-[#667479]' >&gt;</div>
                            </div>
                            <div className='w-[28px] h-[20px] '><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Dog</p></div>
                            <div className='w-[24px] h-[24px] gap-[10px]'>
                              <div className='w-[24px] h-[24px]'>	&gt;</div>
                            </div>
                        <div className='w-[68px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Large Dog</p></div>
                        <div className='w-[24px] h-[24px] gap-[10px]'>
                              <div className='w-[24px] h-[24px]'>	&gt;</div>
                            </div>
                            <div className='w-[120px] h-[20px]'><p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Shiba Inu Sepia</p></div>

                          </div>
                        </div>
                      {/* frame 114 */}

                       <div className='w-[302px] h-[96px] gap-[6px] flex-col'>
                        <div className='w-[302px] h-[58px] gap-[2px] flex flex-col'>
                           <div className='w-[302px] h-[20px]'>
                            <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#99A2A5]'>SKU #1000078</p>
                           </div>
                           <div className='w-[302px] h-[36px]'> <p className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#00171F]'>Shiba Inu Sepia</p></div>
                        </div>
                        <div className='w-[248px] h-[32px] '><p className='font-cutomfont font-[700] text-[20px] leading-[32px] text-[#002A48]'>34.000.000 VND</p></div>
                        <div className='w-[373px] h-[44px] gap-[180x] flex'>
                              <div className='w-[138px] h-[44px] rounded-[57px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] gap-[10px] bg-[#003459]'>
                                <div className='w-[82px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#FDFDFD]'>Contact us</p></div>
                              </div>

                              <div className='w-[217px] h-[44px] rounded-[57px]  pr-[28px] pb-[10px] pl-[24px] gap-[10px] boder-[#002A48] border-[2px]'>
                                <div className='w-[26px] h-[28px] pr-[20x] pb-[4px] gap-[10px]'>
                                  <div className='w-[24px] h-[24px]'>
                                     {/* msg box */}
                                  </div>
                                 
                                </div>
                                <div className='w-[129px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#002A48]'>Chat with Monito</p></div>
                              </div>

                             
                        </div>
                           {/* frame 98 */}
                        <div className='w-[517px] h-[564px]  mt-[10px]'>
                          {/* farmee 96 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[26px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>SKU</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[7px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: #1000078</p></div>
                            </div>

                          </div>
                          {/* frame 97 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[49px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Gender</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[7px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>female</p></div>
                              {/* <div className='w-[7px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>{selectedPet.gender}</p></div> */}
                            </div>

                            <div></div>
                          </div>
                          {/* frame 98 */}

                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[27px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Age</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[65px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>02 months</p></div>
                              {/* <div className='w-[65px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>{selectedPet.age}</p></div> */}
                            </div>

                          </div>
                          {/* frame 99 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[26px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Size</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[42px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Small</p></div>
                            </div>

                          </div>
                          {/* frame 100 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[25px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Color</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[102px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Appricot & Tan</p></div>
                              
                            </div>

                          </div>
                              {/* frame 101 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[75px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Vaccinated</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[30px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Yes</p></div>

                            </div>

                          </div>
                              {/* frame 102 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[71px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Dewormed</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[30px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Yes</p></div>

                            </div>

                          </div>
                              {/* frame 103 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[28px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Cert</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[70px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Yes (MKA)</p></div>

                            </div>

                          </div>
                              {/* frame 104 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[63px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Microchip</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[30px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Yes </p></div>

                            </div>

                          </div>
                              {/* frame 105 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[57px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Microchip</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[61px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Vietnam</p></div>

                            </div>

                          </div>
                              {/* frame 106*/}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[99px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Published Date</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[89px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: 12-Oct-2022</p></div>

                            </div>

                          </div>
                              {/* frame 107 */}
                          <div className='w-[517px] h-[42px] border-b-[1px] pt-[8px] pb-[8px] border-[1px] border-[#EBEEEF] flex'>
                            <div className='w-[194px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[145px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>Additional Information</p></div>
                            </div>

                            <div className='w-[323px] h-[26px] pt-[4px] pr-[11px] pb-[2px] pl-[11px] gap-[10px]'>
                              <div className='w-[80px] h-[20px]'> <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#667479]'>: Pure breed Shih Tzu.Good body structure.With MKA cert and Microchip.Father from champion lineage.</p></div>

                            </div>

                          </div>

                        </div>
                       </div>
                      
                      {/* frame 138 */}
                      {/* frame 98 */}
           </div>

       </div>
       {/* <Footer/> */}

    </div>
    </>
  )
}

export default ProductDetails
