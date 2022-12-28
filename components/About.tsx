import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center md:flex-row'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{ 
          x:-200,
          opacity: 0,
         }}
         transition={{ duration: 1.2 }}
         whileInView={{ x:0, opacity: 1 }}
         viewport={{ once: true }}
        src="/2.png"
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-[210px] xl:w-[350px] xl:h-[450px] mt-10 xl:mt-0 md:mt-0'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Here is a <span className='italic decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-xs md:text-sm'>
        Hi!, thank you for your precious time to visit here. I am Tahmina and have completed my graduation in CSE. I am a <i>Software Engineer</i> with an experience of 9 year as a <i>Full Stack Developer</i>. I am here to pursue a challenging and career oriented position in the field of IT, that offers opportunity for self development as well as career development. To work in a professional and dynamic setting and to attain highest professionalism and efficiency to face the upcoming challenges of the current where I will be able to expose myself to every opportunity through a quality and growth oriented job.
        </p>
      </div>
    </motion.div>
  )
}

export default About