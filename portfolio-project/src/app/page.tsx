import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from './NavBar'
import { SiReact, SiTailwindcss, SiPostgresql, SiElectron, SiTypescript, SiJavascript } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative, TbBrandCss3 } from 'react-icons/Tb'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
      <main className="">
        <section id="home" className='flex align-top flex-col h-70v w-11/12 m-auto'>
          <div className='flex justify-start align-top content-start flex-col'>
            <h1 className=' text-6xl sm:text-7xl font-semibold '>Hello World!</h1>
            <br/>
            <h2 className=' text-5xl sm:text-6xl'>My name is Nicolas Rossi, I am a web developer located in the United States!</h2>
            <br />
            <ul className=" hidden sm:flex flex-row justify-start p-4 gap-4">
                <li className="px-4 py-2 min-h-fit rounded-lg bg-black-900 text-white"><a href="https://www.linkedin.com/in/nicolas-d-rossi/" target="_blank">LinkedIn</a></li>
                <li className="px-4 py-2 min-h-fit rounded-lg bg-black-900 text-white"><a href="https://github.com/N-Rossi" target="_blank">Github</a></li>
                <li className="px-4 py-2 min-h-fit rounded-lg bg-black-900 text-white"><a href="#" target="_blank">Resume</a></li>
                <li className="px-4 py-2 min-h-fit rounded-lg bg-black-900 text-white"><a href="" target="_blank">Email</a></li>
            </ul>
          </div>
        </section>

        <section id="about" className='py-10 p-10 flex align-top flex-col h-100v bg-no-repeat bg-cover w-11/12 m-auto'>
          <div className='flex justify-start align-top content-start flex-col'>
            <h3 className='text-3xl sm:text-4xl'>My name is Nicolas Rossi, I am a web developer with a Bachelors Degree in Computer Science and a minor in Mathematics</h3>
            <br/>
            <hr className='1px text-black-300 solid'/>
            <br/>
            <h3 className='text-3xl sm:text-4xl'>My Web Stack:</h3>
            <br/>
              <ul className='flex flex-row gap-6'>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <li><SiReact size={'3vh'} /></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>ReactJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><TbBrandNextjs size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>NextJS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><TbBrandReactNative size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>REACT NATIVE</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><SiTailwindcss size={'3vh'} /></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>TailwindCSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><TbBrandCss3 size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><SiTypescript size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>Typescript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><SiJavascript size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>Javascript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>


                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><SiPostgresql size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>PostgreSQL</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <li className=''><SiElectron size={'3vh'}/></li>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black-300 text-black opacity-90 p-2 rounded-md border-none'>
                      <p className=''>Electron</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>




              </ul>
          </div>
        </section>

        <section id="projects" className='text-center py-10 p-10 flex flex-col h-100v'>
          <div className=' container grid grid-cols-1 m-auto gap-12 sm:grid-cols-2 h-screen'>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
            <div className='grid h-1/4 p-6 bg-white border border-brown-900 rounded-lg justify-center'>
              <h2>test</h2>
            </div>
          </div>
        </section>

        <section id="contact" className='text-center py-10 p-10 flex align-top flex-col h-100v'>
          <h2 className=" text-5xl py-2 font-medium md:text-6xl text-brown-900">Contact Me!</h2>
        </section>
        

      </main>
    )
}
