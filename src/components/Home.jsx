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
    <div className='flex justify-center h-[60vh] bg-[#294d61]'>

    <Card className="w-[90%] md:w-[65%] lg:w-[50%] h-[70vh] mt-20">
          <CardHeader className="relative">
            <img
              src={Cleaning}
              alt="card-image"
              
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-logo text-[#072E33]">
            WELCOME TO
            </Typography>
            <img src={Logo} className="w-[60%] mx-auto" alt="" />
            <Typography className='font-logo font-thin text-[#072E33]'>
            Our mission is to simplify your household tasks.
            </Typography>
            <Typography className='font-logo font-thin text-[#072E33]'>
            Sign up today!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className='w-[110px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg'>Sign Up</Button>
            <Button className='w-[110px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signin')} >Sign In</Button>
            <Button className='w-[150px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/learn-more')} >Learn More</Button>
          </CardFooter>
        </Card>


    </div>
  )
}
