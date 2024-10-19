import React from 'react'
import pet1 from './../../assets/images/pet1.png'
import { useNavigate } from 'react-router-dom'


const PetCard = (props) => {

  const navigate=useNavigate()
     
  const handleCardDeatils = (id) => {
    
    navigate(`/productdetails/${id}`);
  };

    console.log("data data:"+JSON.stringify(props.petsData))
  return (
         <>
          {props.petsData?.map(({id,breed,gender,age,price,image})=>{
            return(
                <div className='w-[280px] h-[378px]  rounded-[12px] pt-[8px] pr-[8px] pl-[8px] gap-[8px] bg-[#FDFDFD] shadow-custom4 flex flex-col' onClick={()=>handleCardDeatils(id)}>
                <div className='w-[264px] h-[264px] rounded-[10px]'>
                    <img src={image} alt="" />
                </div>
                <div className='w-[264px] h-[98px] py-[8px] pr-[8px] pl-[8px] gap-[16px]'>
                    <div className='w-[248px] h-[70px] gap-[4px] flex flex-col'>
                        <div className='w-[248px] h-[24px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>{id} - {breed}</p></div>
                        <div className='w-[248px] h-[18px] gap-[4px] flex'>
                             <div className='w-[81px] h-[18px] gap-[6px] flex'>
                                <div className='w-[34px] h-[18px]'><p className='font-cutomfont font-[500] text-[12px] leading-[18px]'>Gene:</p></div>
                                <div className='w-[41px] h-[18px]'><p className='font-cutomfont font-[700] text-[12px] leading-[18px] text-[#667479]'>{gender}</p></div>
                             </div>
                             <div className='w-[18px] h-[18px] bg-[#667479]'>
    
                             </div>
                             <div className='w-[91px] h-[18px] gap-[6px] flex'> 
                                   <div className='w-[26px] h-[18px]'><p className='font-cutomfont font-[500] text-[12px] leading-[18px]'>Age:</p></div>
                                   <div className='w-[59px] h-[18px]'><p className='font-cutomfont fon-[700] text-[12px] leading-[18px] text-[#667479]'>02 months</p></div>
                             </div>
                        </div>
                        <div className='w-[248px] h-[20px]'><p className='font-cutomfont font-[700px] text-[14px] leading-[20px] text-[#00171F]'>3.900.000 VND</p></div>
                    </div>
                </div>
              </div>
            )
        })
        }
       
         </>
        
 
  )
}

export default PetCard
