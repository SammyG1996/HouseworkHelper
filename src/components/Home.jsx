import React from 'react'
import Logo from "../assets/housework-helper-high-resolution-logo-color-on-transparent-background.png"
import Cleaning from "../assets/home-picture.jpeg"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';



export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center h-[100%] bg-[#294d61]'>

    <Card className="w-[90%] md:w-[65%] lg:w-[50%] h-[470px] md:h-[70vh] mt-20 animate-fade-right animate-once animate-ease-in-out animate-normal">
          <CardHeader className="relative">
            <img
              src={Cleaning}
              alt="card-image"
              
            />
          </CardHeader>
          <CardBody className='p-3'>
            <Typography variant="h5" color="blue-gray" className="font-logo text-[#072E33]">
            WELCOME TO
            </Typography>
            <img src={Logo} className="w-[60%] mx-auto" alt="" />
            <Typography className='font-sans text-[#072E33] mt-5'>
            Our mission is to simplify your household tasks.
            </Typography>
            <Typography className='font-sans text-[#072E33]'>
            <Button className='w-[155px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signup')} >Sign Up Today‼️</Button>
            <Button className='w-[120px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signup')} >Or Login 😁</Button>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            
            {/* <Button className='w-[110px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signin')} >Sign In</Button> */}
            {/* <Button className='w-[150px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/learn-more')} >Learn More</Button> */}
            <p><a onClick={()=> navigate('/learn-more')} className='underline text-[#6DA5C0]'>Learn More Here</a></p>
          </CardFooter>
        </Card>


    </div>
  )
}
