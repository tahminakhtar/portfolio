import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Tahmina</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`} />
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
     
      <section id="about" className='snap-center'>
        <About />
      </section>
     
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      {/* SKILLS */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-ponter'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://www.nicepng.com/png/detail/11-115607_star-png-smiley-face-star-with-smiley-face.png" 
              alt="" 
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
