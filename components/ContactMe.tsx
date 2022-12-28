import React from 'react'
import {motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {}
type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
}
const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:tahminausa90@gmail.com?subject=${formData.subject}&body=hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  }
  return (
    <motion.div 
      initial={{ 
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact Me
        </h3>
        <div className='flex flex-col space-y-5 mt-10 md:mt-25'>
          <h4 className='text-2xl md:text-3xl font-semibold text-center'>
            I have got just what you need, { " "} 
            <span className='decoration-[#F7AB0A]/50 underline'>Connect</span>
          </h4>
          <div className='space-y-5 md:space-y-8'>
            {/* <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#F7AB0A]/50 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-sm md:text-xl'>+12345678</p>
            </div> */}
            
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#F7AB0A]/50 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-sm md:text-xl'>tahminausa90@gmail.com</p>
            </div>
            
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#F7AB0A]/50 h-5 w-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-sm md:text-xl'>Chattogram, Bangladesh</p>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit justify-center mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' className='contactInput contactInputInput' type="text" />
              <input {...register('email')} placeholder='Email' className='contactInput contactInputInput' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput contactInputInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput ' />
            <button className='bg-[#F7AB0A] py-2 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
          </form>
        </div>
      </motion.div>
  )
}

export default ContactMe