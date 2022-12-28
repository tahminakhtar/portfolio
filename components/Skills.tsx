import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import {skills} from './dataInfo/skills'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Hover over a skill for currency proficiency</h3>
      <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-10 gap-2'>
        {
          skills?.slice(0, skills.length/2).map((skill, i) => <Skill skill={skill} key={i} />)
        }
        {
          skills.slice(skills.length/2, skills.length).map((skill, i) => <Skill skill={skill} key={i} directionalLeft />)
        }
      </div>
    </motion.div>
  )
}

export default Skills