import React from 'react'
import Logo from "../assets/housework-helper-high-resolution-logo-color-on-transparent-background.png"
import { Button } from "@material-tailwind/react";

export const Home = () => {
  return (
    <div className='flex flex-col justify-center mt-20'>
        <h1 className='text-xl font-serif md:text-3xl lg:text-4xl'>Welcome To</h1>
        <img src={Logo} className='w-[90vw] md:w-[65vw] lg:w-[50vw] m-auto' alt="" />
        <h2 className='mt-10 text-xl font-serif lg:text-2xl'>Our mission is to simplify household tasks.</h2>
        <h2 className='text-xl font-serif lg:text-2xl'>Sign up today! </h2>
        <div className='mt-10 flex flex-row justify-center'>
            <Button className='w-[100px] mr-2 bg-[#004C6C] shadow-lg'>Sign Up</Button>
            <Button className='w-[100px] ml-2 mr-2 bg-[#004C6C] shadow-lg'>Sign In</Button>
            <Button className='w-[130px] ml-2 bg-[#004C6C] shadow-lg'>Learn More</Button>
        </div>

    </div>
  )
}
