import React from 'react'
import {motion} from 'framer-motion'
type SkillType={
  progress: number;
  icon: string;
}
type Props = {
  directionalLeft?:boolean
  skill: SkillType;
}

const Skill = ({directionalLeft, skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
        src={skill.icon}
        initial={{ 
          x: directionalLeft ? -200: 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-18 sm:h-18 md:w-26 md:h-26 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-18 sm:h-18 md:w-26 md:h-26 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-100'>{ skill.progress } %</p>
        </div>
      </div>
    </div>
  )
}

export default Skill