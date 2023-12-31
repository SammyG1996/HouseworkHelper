import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Logo from "../assets/cleaning.jpeg"
  import {scrollToTop} from "../helpers/scroll"
  

export const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
      scrollToTop();
  }, []);

  return (
    <div className='w-[100vw] vh-[100%] bg-[#294d61] flex justify-center '>
      

            <Card className="mt-20 mb-20 w-[90%] md:w-[65%] lg:w-[50%] animate-fade-right animate-once animate-ease-in-out animate-normal">
                <CardHeader color="blue-gray" className="relative">
                    <img
                    src={Logo}
                    alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 font-logo font-thin text-2xl lg:text-3xl text-[#072E33]">
                    WHAT IS HOUSEWORK HELPER?
                    </Typography>
                    <Typography>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Tired of the constant struggle to keep those household chores in check? 🧹🏡</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Say goodbye to the chaos with Housework Helper, your ultimate web app solution! 🚀</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Household chores can be a real headache, especially when everyone in the family is involved.</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>But fear not, because Housework Helper is here to save the day! 💪✨</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Housework Helper is not just a web app; it's your secret weapon for conquering those chores effortlessly. 💻✅</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Imagine this: You log in, create a new task with a few clicks, assign it to your family member(s), choose a due date, and voilà! ✨📅</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>But that's not all - Housework Helper takes care of the rest! 🤖📢</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>It sends gentle reminders to those responsible, ensuring no task ever slips through the cracks again. 📩🔔</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>And for those recurring chores? No problem! Housework Helper lets you set the interval and then...just set it and forget it! 🔄🤯</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>No more racking your brain about when you last tackled that dusty couch or cleaned out the fridge. 🛋️🍽️</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Housework Helper's got your back, so you can enjoy a tidy, stress-free home without the hassle. 🌟🏠</p>
                        <p className='text-md font-sans text-[#05161A] lg:text-lg mt-5'>Don't let chores bring you down; let Housework Helper bring the sparkle back to your home life online! 💎✨</p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button className='w-[170px] ml-2 font-logo font-thin bg-[#6DA5C0] shadow-lg mx-auto mt-10 mb-20' onClick={()=> navigate('/signup')} >Sign Up Today!</Button>
                </CardFooter>
            </Card>

       
        
        


    </div>
  )
}
