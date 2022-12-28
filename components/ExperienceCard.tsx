import React from 'react'
import {motion} from 'framer-motion'

type Position = { 
  title: string; 
  startedAt: string; 
  endedAt: string; 
  isContinued: boolean; 
}

type TechStack = { name: string; icon: string; };

type Experience = {
  position: Position; 
  company: string; 
  companyLogo: string; 
  techStacks: TechStack[]; 
  responsibilites: string[]; 
}

type Props = {
  experience: Experience,
}

const ExperienceCard = ({experience}: Props) => {  
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[100%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      <motion.img
        initial={{ 
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className='w-24 h-24 md:w-[100px] md:h-[100px] rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
        src={experience.companyLogo}
      />
      <div className='px-2 md:px-10 w-[100%]'>
        <h4 className='text-2xl md:text-4xl font-light'>{experience.position.title}</h4>
        <p className='font-bold text-1xl md:text-2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {
            experience.techStacks.map((techStack: any, i: number) => (
              <img 
              className='h-5 w-5 md:h-8 md:w-8 rounded-full'
              src={techStack.icon} 
              alt="" 
              key={i}
            />
            ))
          }
        </div>
        <p className='uppercase py-2 text-gray-300 text-sm md:text-base'>Started: {experience.position.startedAt} - {experience.position.isContinued ? "Present": "Ended: "+experience.position.endedAt}</p>
        <ul className='list-disc space-y-4 ml-0 md:ml-5 h-40 md:h-50 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB07] pr-5 text-sm md:text-md'>
          {
            experience.responsibilites.map((responsibility: string, i: number) => (
              <li key={i}>{responsibility}</li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard