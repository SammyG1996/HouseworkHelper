import React from 'react'
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
 
export function SignIn() {
  return (
    <div className='flex justify-center mx-auto mt-20'>

      <Card className="w-[80vw] md:w-[50vw] lg:w-[35vw]">
              <CardHeader color="white" className="relative">
                  <img
                  src={Logo}
                  alt="card-image"
                  className='w-[80%] mx-auto mt-5 mb-5'
                  />
              </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign In
              </Button >
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>

    </div>

  );
}