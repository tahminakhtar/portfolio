import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { experiences } from "./dataInfo/experiences";
type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-left max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden md:flex-row'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80 mt-20'>
        {experiences.map((experience, i) => (<ExperienceCard experience={experience} key={i}/>))}
      </div>
    </motion.div>
  )
}

export default Experience