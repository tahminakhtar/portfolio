import React from 'react'
import { motion } from "framer-motion";
import {projects} from './dataInfo/projects'
type Project = {
  title: string;
  brief: string;
  url: string;
}
type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div 
      initial={{ 
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {
          projects.map((project, i) => (
            <div 
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-5 h-screen' 
              key={i+1}>
              <motion.img 
                initial={{ 
                  y: -300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
                src={project.image} 
                alt="" 
                className='w-[70%] md:w-[50%]'
              />
              <div className='space-y-2 px-0 md:px-10 max-w-full'>
                <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
                  {project.title}
                </h4>
                <div className='flex items-center space-x-2 justify-center'>
                  {
                    project.techs.map((tech, i) => (
                      <img 
                        className='h-8 w-8 md:h-8 md:w-8'
                        src={tech} 
                        alt="" 
                        key={i} 
                      />
                    ))
                  }
                </div>
                <div className='text-xs sm:text-sm md:text-lg text-center md:text-left' dangerouslySetInnerHTML={{__html: project.brief}} />
                <p className='text-center italic decoration-[#F7AB0A]/50'>{i+1} of { projects.length }</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects