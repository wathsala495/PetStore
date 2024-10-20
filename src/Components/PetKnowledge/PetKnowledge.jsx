import React from 'react'
import pet1 from './../../assets/images/pet1.png'
import pet2 from './../../assets/images/pet2.png'
import pet3 from './../../assets/images/pet3.png'
import KnowledgeCard from './../KnowledgeCard/KnowledgeCard'

const PetKnowledge = () => {
    
   const questionDetails=[
    {
        id:1,
        question:"What is a Pomeranian? How to Identify Pomeranian Dogs",
        answer:"The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",

        image:"pet1"
    },
    {
        id:2,
        question:"Dog Diet You Need To Know",
        answer:"Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        image:"./../../assets/images/pet2.png"

    },
    {
        id:3,
        question:"Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
        answer:"Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        image:"./../../assets/images/pet3.png"
    },
   ]

  return (
   
    // <div className='w-full h-[634px] absolute top-[3810px] bg-[white]'>
    <div className='w-full h-[634px] absolute top-[3350px] bg-[white]'>
        <div className='absolute w-[242px] h-[62px] top-[60px] left-[130px] gap-[2px] flex flex-col'>
            <div className='w-[145px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#000000]'>You already know ?</p></div>
            <div className='w-[242px] h-[36px]'>
                <p className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#003459]'>Useful pet knowledge</p>
            </div>
        </div>

        <div className='absolute w-[151px] h-[ 44px] top-[78px] left-[1159px] rounded-[57px] border-[1.5px] pt-[12px] pb-[12px] px-[28px] gap-[8px]'>
            <div className='w-[67px] h-[20px]'>
                <p className='font-cutomfont font-[500] text-[14px] leading-[20px] text-[#003459]'>View more</p>
            </div>

        </div>
        {/* card 1 */}

         {/* <div className='flex flex-wrap gap-[20px] absolute top-[150px] left-[130px]'>
            <KnowledgeCard questionDetails={questionDetails}/>
            
         </div> */}
        <div className='absolute w-[380px] h-[424px] top-[150px] left-[130px] rounded-[12px] p-[8px] gap-[8px] flex flex-col bg-[#FFFFFF]  shadow-custom3'>
            <div className='w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF]'> <img src={pet1} alt="" className='w-[364px] h-[243px]' /></div>
            <div className='w-[364px] h-[160px] p-[8px] gap-[10px]'>
                <div className='w-[89px] h-[20px] rounded-[28px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] flex gap-[10px] bg-[#00A7E7]'>
                    <div className='w-[69px] h-[16px]'><p className='font-cutomfont font-[700] text-[10px] leading-[16px] text-[#FDFDFD]'>Pet knowledge</p></div>
                </div>
                <div className='w-[348px] h-[114px] gap-[6px] flex flex-col'>
                     <div className='w-[348px] h-[48px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>What is a Pomeranian? How to Identify Pomeranian Dogs</p></div>
                     <div className='w-[348px] h-[60px]'>
                        <p className='font-cutomfont font-[400] text-[14px] leading-[20px] text-[#242B33]'>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
                     </div>
                </div>
            </div>
        </div>
        {/* card2 */}

        <div className='absolute w-[380px] h-[424px] top-[150px] left-[530px] rounded-[12px] p-[8px] gap-[8px] flex flex-col bg-[#FFFFFF]  shadow-custom3'>
            <div className='w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF]'> <img src={pet2} alt="" className='w-[364px] h-[243px]' /></div>
            <div className='w-[364px] h-[160px] p-[8px] gap-[10px]'>
                <div className='w-[89px] h-[20px] rounded-[28px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] flex gap-[10px] bg-[#00A7E7]'>
                    <div className='w-[69px] h-[16px]'><p className='font-cutomfont font-[700] text-[10px] leading-[16px] text-[#FDFDFD]'>Pet knowledge</p></div>
                </div>
                <div className='w-[348px] h-[114px] gap-[6px] flex flex-col'>
                     <div className='w-[348px] h-[48px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Dog Diet You Need To Know</p></div>
                     <div className='w-[348px] h-[60px]'>
                        <p className='font-cutomfont font-[400] text-[14px] leading-[20px] text-[#242B33]'>Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</p>
                     </div>
                </div>
            </div>
        </div>
        {/* card3 */}

        <div className='absolute w-[380px] h-[424px] top-[150px] left-[930px] rounded-[12px] p-[8px] gap-[8px] flex flex-col bg-[#FFFFFF]  shadow-custom3'>
            <div className='w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF]'> <img src={pet3} alt="" className='w-[364px] h-[243px]' /></div>
            <div className='w-[364px] h-[160px] p-[8px] gap-[10px]'>
                <div className='w-[89px] h-[20px] rounded-[28px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] flex gap-[10px] bg-[#00A7E7]'>
                    <div className='w-[69px] h-[16px]'><p className='font-cutomfont font-[700] text-[10px] leading-[16px] text-[#FDFDFD]'>Pet knowledge</p></div>
                </div>
                <div className='w-[348px] h-[114px] gap-[6px] flex flex-col'>
                     <div className='w-[348px] h-[48px]'><p className='font-cutomfont font-[700] text-[16px] leading-[24px] text-[#00171F]'>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</p></div>
                     <div className='w-[348px] h-[60px]'>
                        <p className='font-cutomfont font-[400] text-[14px] leading-[20px] text-[#242B33]'>Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PetKnowledge
