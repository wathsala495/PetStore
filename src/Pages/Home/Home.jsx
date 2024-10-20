import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Pets from '../../Components/Pets/Pets'
import BannerFriend from '../../Components/Banner-2/BannerFriend'
import Products from '../../Components/Products/Products'
import PetSellert from '../../Components/PetSeller/PetSellert'
import Adoption from '../../Components/Adoption/Adoption'
import PetKnowledge from '../../Components/PetKnowledge/PetKnowledge'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='w-[1440px] h-[4884px] absolute  left-[205px] bg-[#FDFDFD] z-0 '>
        {/* <Header/> */}
       <Banner/>
    <Pets/>
     <BannerFriend/>
     <Products/>
     <PetSellert/>
     <Adoption/>

     <PetKnowledge/>
     {/* <Footer/> */}
    </div>
  )
}

export default Home
