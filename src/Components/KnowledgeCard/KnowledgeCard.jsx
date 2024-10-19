import React from 'react'
import pet1 from './../../assets/images/pet1.png'

const KnowledgeCard = (props) => {
  return (
    <>
    {
        props.questionDetails.map(({id,image,question,answer})=>{
            return(
                <div className='absolute w-[380px] h-[424px]  rounded-[12px] p-[8px] gap-[8px] flex flex-col bg-[#FFFFFF]  shadow-custom3'>
                <div className='w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF]'> <img src={image} alt="" className='w-[364px] h-[243px]' /></div>
                <div className='w-[364px] h-[160px] p-[8px] gap-[10px]'>
                    <div className='w-[89px] h-[20px] rounded-[28px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] flex gap-[10px] bg-[#00A7E7]'>
                        <div className='w-[69px] h-[16px]'><p className='font-cutomfont font-[700] text-[10px] leading-[16px] text-[#FDFDFD]'>Pet knowledge</p></div>
                    </div>
                    <div className='w-[348px] h-[114px] gap-[6px] flex flex-col'>
                         <div className='w-[348px] h-[48px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>{question}</p></div>
                         <div className='w-[348px] h-[60px]'>
                            <p className='font-cutomfont font-[400] text-[14px] leading-[20px] text-[#242B33]'>{answer}</p>
                         </div>
                    </div>
                </div>
            </div>
            )
        })
    }
        {/* <div className='absolute w-[380px] h-[424px] top-[150px] left-[130px] rounded-[12px] p-[8px] gap-[8px] flex flex-col bg-[#FFFFFF]  shadow-custom3'> */}
      
    </>
  )
}

export default KnowledgeCard
