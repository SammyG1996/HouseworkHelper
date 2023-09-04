import React, { useEffect } from 'react'
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
import LogoIcon from "../assets/logo_icon-only.png"
import { scrollToTop } from '../helpers/scroll';



export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
      scrollToTop();
  }, []);

  return (
    <div className='flex flex-col justify-center bg-[#294d61]'>

    <div className='flex justify-center'>
      <Card className="w-[90%] md:w-[65%] lg:w-[50%] h-[470px] md:h-[70vh] my-20 animate-fade-right animate-once animate-ease-in-out animate-normal">
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
              <Button className='w-[160px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signup')} >Sign Up Today‼️</Button>
              <Button className='w-[130px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/login')} >Or Login 😁</Button>
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              
              {/* <Button className='w-[110px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/signin')} >Sign In</Button> */}
              {/* <Button className='w-[150px] font-logo font-thin mt-2 mx-1 bg-[#6DA5C0] shadow-lg' onClick={()=> navigate('/learn-more')} >Learn More</Button> */}
              {/* <p><a onClick={()=> navigate('/learn-more')} className='text-[#072E33] font-logo font-thin'>Learn More ℹ️</a></p> */}
            </CardFooter>
          </Card>
      </div>


      <div className='flex justify-center'>
          <Card className="flex-row w-[90%] md:w-[65%] lg:w-[50%] my-20">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none my-auto"
          >
            <img
              src={LogoIcon}
              alt="card-image"
              className="w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              What is Housework Helper?
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Tired of the constant struggle to keep those household chores in check? 🧹🏡</p>
              <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Say goodbye to the chaos with Housework Helper, your ultimate web app solution! 🚀</p>
              <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>See how Housework Helper can help you organize you home today.</p>
            </Typography>
            <a onClick={()=> navigate('/learn-more')} className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
        

    </div>
  )
}
