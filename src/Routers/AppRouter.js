import React from 'react'
import Header from '../Components/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import PetList from '../Pages/PetList/PetList'
import ProductDetails from '../Pages/Product Deatils/ProductDetails'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
      element:<Home/>
      },
      {
        path:'petlist',
        element:<PetList/>
      },
      {
        
        path:"productdetails/:id" ,
        element:<ProductDetails/>
          
      }

    ]
    // path:'/' ,element:<Home/>
  },
  // {
  //    path:'petlist',element:<PetList/>
  // },
  // {
  //   path:"productdetails/:id" ,element:<ProductDetails/>
  // }
])
const AppRouter = () => {
  return (
    // <div>
    //   <Header/>
    // </div>
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default AppRouter
