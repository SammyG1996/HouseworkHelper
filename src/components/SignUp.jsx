import React, { useEffect } from 'react'
import Logo from '../assets/housework-helper-high-resolution-logo-color-on-transparent-background.png'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { scrollToTop } from '../helpers/scroll';
 
export function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className='flex justify-center mx-auto my-20'>

      <Card className="w-[80vw] md:w-[50vw] lg:w-[35vw] animate-fade-right animate-once animate-ease-in-out animate-normal">
              <CardHeader color="white" className="relative">
                  <img
                  src={Logo}
                  alt="card-image"
                  className='w-[80%] mx-auto mt-5 mb-5'
                  />
              </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Username" size="lg" />
              <Input label="Password" size="lg" />
              <Input label="Confirm Password" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth className='font-logo font-thin bg-[#6DA5C0]'>
                Sign Up
              </Button >
              <Typography variant="small" className="mt-6 flex justify-center font-logo font-thin text-[#072E33]">
                Already have an account?
                <Typography
                  as="a"
                  onClick={()=> navigate('/signin')}
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-thin font-logo text-[#0C7075]"
                >
                  Sign In
                </Typography>
              </Typography>
            </CardFooter>
          </Card>

    </div>

  );
}