import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    
  return (
    <>
       <div className='gap-x-[8px] gap-y-[20px] flex flex-wrap' >
          {
               props.products?.map(({id,name,product,price,size,description,image})=>{
                    return(
                         <div className='w-[280px] h-[446px] rounded-[12px] pt-[8px] pr-[8px] pl-[8px]  bg-[#FDFDFD] shadow-custom2' >
                         <div className='w-[264px] h-[264px] rounded-[10px] bg-[#FFFFFF]'>
                        <img src={image} alt="" className='w-[264px] h-[264px]' />
                         </div>
                         <div className='w-[264px] h-[166px] pt-[8px] pr-[8px] pb-[20px] pl-[8px]  gap-[10px] flex flex-col'>
                             <div className=' flex flex-col w-[248px] h-[94px] gap-[4px]'>
                                 <div className='w-[248px] h-[48px] '>
                                   <p className='font-cutomfont font-[700] text-[16px] leading-[24px]'>{name}</p>
                                 </div>
                                 <div className='w-[248px] h-[18px] gap-[4px] flex'>
                                 <div className='w-[108px] h-[18px] gap-[6px] flex'>
                                     <div className='w-[47px] h-[18px] '><p className='font-cutomfont font-[500] size-[12px] leeading-[18px]'>Product:</p></div>
                                     <div className='w-[55px] h-[18px]'><p className='font-cutomfont font-[70] text-[12px] leading-[18px] text-[#667479]'>{product}</p></div>
                                 </div>
                                 <div className='w-[70px] h-[18px] flex gap-[6px]'>
                                      <div className='w-[26px] h-[18px]'><p className='font-cutomfont font-[500] text-[12px] leading-[18px]'>Size:</p></div>
                                      <div className='w-[38px] h-[18px]'><p className='font-cutomfont font-[700] text-[12px] leading-[18px] text-[#667479]'>{size}</p></div>
                                 </div>
                                 </div>
         
                                 <div className='w-[248px] h-[20px]'>
                                      <p className='font-cutomfont font-[700] text-[14px] leading-[20px] text-[#00171F]'>{price}</p>
                                 </div>
                                 
                             </div>
         
                             <div className='w-[248px] h-[34px] rounded-[8px] pt-[6px] pr-[10px] pb-[4px] pl-[10px] gap-[2px] flex' >
                                 <div className='w-[20px] h-[20px] rotate-[-180deg]'>
                                      <div className='w-[3.62px] h-[16.12px] absolute top-[3.88px] left-[11px] rotate-[-180deg] bg-[#FE9923]'>
         
                                      </div>
                                      <div className='w-[20px] h-[24px] pt-[10px] pr-[8px] pb-[10px] pl-[8px] gap-[10px] flex' >
                                        <div className='w-[4px] h-[4px] rounded-[10px] bg-[#003459]'></div>
         
                                      </div>
                                     
                                     
                                 </div>
                                 <div className='w-[148px] h-[20px] '>
                                        <p className='font-cutomfont font-[700] text-[14px] leading-[20px]'>Free Toy & Free Shaker</p>
                                      </div>
         
                             </div>
                         </div>
                    </div>
                    )
               })
          }

        

           
        </div> 
    </>
  )
}

export default ProductCard
