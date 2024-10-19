
import { Outlet } from 'react-router-dom';
import './App.css';
import AppRouter from './Routers/AppRouter';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Pets from './Components/Pets/Pets'
import BannerFriend from './Components/Banner-2/BannerFriend';
import Products from './Components/Products/Products';
import PetSellert from './Components/PetSeller/PetSellert'
import Adoption from './Components/Adoption/Adoption'
import PetKnowledge from './Components/PetKnowledge/PetKnowledge'

function App() {
  return (
  //  <div className=' w-full h-[4794px] top-[828px] left-[273.27px] rounded-[49.08px] border-[7.85px] border-[#FFFFFF] shadow-custom bg-[ #FDFDFD]'  >
   <div  >
    <AppRouter/>
    
    {/* <Banner/>
    <Pets/>
     <BannerFriend/>
     <Products/>
     <PetSellert/>
     <Adoption/>
     <PetKnowledge/>
     <Footer/> */}

   </div>
  );
}

export default App;

