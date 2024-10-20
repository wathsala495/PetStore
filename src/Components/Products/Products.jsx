import React, { useEffect, useState } from 'react'
import img2 from'./../../img/img2a.png'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'


const Products = () => {
     const [products,setProducts]=useState([])
     useEffect(()=>{
          axios
   .get("https://monitor-backend-rust.vercel.app/api/products")
   .then((res)=>{
    if(res){
        console.log("products:"+JSON.stringify(res.data))
        setProducts(res.data)
    }
    else{
        console.log("no data")
    }
   }).catch((error)=>{
    console.error("There was an error!", error);
   })
     },[])
  return (
 
    // <div className='w-[1440px] h-[1122px] absolute top-[2059px] z-40 max-[415px]:hidden'>
    <div className='w-[1440px] h-[1122px] absolute top-[2059px] z-40 max-[415px]:hidden'>
      <div className='w-[367px] h-[62px] absolute top-[60px] left-[130px] gap-[2px] flex flex-col'>
        <div className='w-[326px] h-[24px]'><p className='font-cutomfont font-[500] text-[16px] leading-[24px] text-[#000000]'>Hard to choose right products for your pets?</p></div>
        <div className='w-[146px] h-[36px]'><h4 className='font-cutomfont font-[700] text-[24px] leading-[36px] text-[#003459]'>Our Products</h4></div>
      </div>

      {/* <div className='w-[1180px] h-[446px] absolute top-[150px] left-[130px] gap-[20px]'> */}
      <div className='w-full h-[446px] absolute top-[150px] left-[130px] gap-[20px]'>
        <ProductCard products={products}/>
       
           
      </div>
    </div>
  )
}

export default Products
