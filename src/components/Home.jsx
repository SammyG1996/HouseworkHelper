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
    <div className='flex justify-center h-[60vh] bg-[#f0f0f0]'>

    <Card className="w-[90%] md:w-[65%] lg:w-[50%] h-[60vh] mt-20">
          <CardHeader className="relative">
            <img
              src={Cleaning}
              alt="card-image"
              
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Welcome To Housework Helper
            </Typography>
            <Typography>
            Our mission is to simplify household tasks.
            </Typography>
            <Typography>
            Sign up today!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className='w-[100px] mt-2 mx-1 bg-[#004C6C] shadow-lg'>Sign Up</Button>
            <Button className='w-[100px] mt-2 mx-1 bg-[#004C6C] shadow-lg' onClick={()=> navigate('/signin')} >Sign In</Button>
            <Button className='w-[130px] mt-2 mx-1 bg-[#004C6C] shadow-lg' onClick={()=> navigate('/learn-more')} >Learn More</Button>
          </CardFooter>
        </Card>


    </div>
  )
}
