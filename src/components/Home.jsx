import React from 'react'
import Logo from "../assets/housework-helper-high-resolution-logo-color-on-transparent-background.png"
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router';


export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center h-[60vh] bg-[#f0f0f0]'>
        <img src={Logo} className='w-[90vw] md:w-[65vw] lg:w-[50vw] mx-auto' alt="" />
        <h2 className='mt-10 text-xl font-serif lg:text-2xl'>Our mission is to simplify household tasks.</h2>
        <h2 className='text-xl font-serif lg:text-2xl'>Sign up today! </h2>
        <div className='mt-10 flex flex-row justify-center'>
            <Button className='w-[100px] mr-2 bg-[#004C6C] shadow-lg'>Sign Up</Button>
            <Button className='w-[100px] ml-2 mr-2 bg-[#004C6C] shadow-lg'>Sign In</Button>
            <Button className='w-[130px] ml-2 bg-[#004C6C] shadow-lg' onClick={()=> navigate('/learn-more')} >Learn More</Button>
        </div>

    </div>
  )
}
