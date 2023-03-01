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

  const skills = [
    {
      title: "ReactJS",
      img: <SiReact size="2rem" />,
      content: "I have built various web and desktop applications using ReactJS"
  },
  {
      title: "React Native",
      img: <TbBrandReactNative size="2rem" />,
      content: "I have used REACT NATIVE to build a mobile application that uses one codebase to support both IOS and Android"
  },
  {
      title: "Electron",
      img: <SiElectron size="2rem" />,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
    title: "NextJS",
    img: <TbBrandNextjs size="2rem"/>,
    content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Javascript",
      img: <SiJavascript size="2rem"/>,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Typescript",
      img: <SiTypescript size="2rem"/>,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "CSS",
      img: <TbBrandCss3 size="2rem"/>,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Tailwind CSS",
      img: <SiTailwindcss size="2rem"/>,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "PostgreSQL",
      img: <SiPostgresql size="2rem"/>,
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  ]
  const projects = [
    {
      title: "Example Project",
      content: "An example project I created using React!",
      img: "https://thumbs.dreamstime.com/b/landscape-grass-field-green-environment-public-park-use-as-natural-background-backdrop-78426893.jpg",
  },
  ]

  return (
      <main className="">
        <section id="home" className='flex align-top flex-col h-100v w-11/12 m-auto'>
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

        <section id="about" className='flex align-top flex-col min-h-100v w-11/12 m-auto'>

          <div className="flex align-top flex-col h-30v w-11/12 m-auto">
              <div className="flex justify-start align-top content-start flex-col">
                  <p className="text-black-900 text-xl sm:text-5xl">
                      I am a Software Developer who loves to use my skills
                      to build anything! I have received a Bachelors Degree in Computer Science
                      with a minor in Mathematics, and work professionally as a Software Developer
                      currently. alongside a concentration in Cyber Security
                  </p>
              </div>
          </div>

          <br />
          <hr className='1px text-black-300 solid'/>
          <br/>
          <h3 className='text-3xl sm:text-4xl'>My Web Stack:</h3>
          <br/>
          <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                  {skills.map((items, key) => (
                    <div className=" relative w-50vh p-4 shadow-md lg:max-w-lg m-auto" key={key}>
                      <div className=' absolute left-2 top-2'>
                        {items.img}
                      </div>
                      <div className="space-y-2">
                          <h3 className="text-3xl font-semibold justify-center flex">
                              {items.title}
                          </h3>
                          <p className="text-black-900 text-xl">
                              {items.content}
                          </p>
                      </div>
                    </div>
                  ))}
              </div>
        </section>

        <section id="projects" className='text-center flex flex-col min-h-100v p-10'>
          <h2 className='text-5xl p-10'>Projects</h2>
          <br/>
          <hr className='1px text-black-300 solid'/>
          <br />
          <div className=' container grid grid-cols-1 m-auto gap-12 w-full sm:w-1/2'>
            {projects.map((items, key) => (
                    <a className="grid min-h-1/4  justify-center relative hover:scale-110 duration-500 hover:shadow-lg" key={key} href="http://localhost:3000/" >
                      <img src={items.img} className=" w-screen"/>
                      <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-start items-end bottom-2 left-2 text-3xl text-white font-semibold'>
                        <div className='flex flex-col justify-start'>
                          <h3 className='flex justify-start'>{items.title}</h3>
                          <p>{items.content}</p>
                        </div>
                      </div>
                    </a>
                  ))}
          </div>
        </section>

        <section id="contact" className='text-center py-10 p-10 flex align-top flex-col h-100v'>
          <h2 className=" text-5xl py-2 font-medium md:text-6xl text-brown-900">Contact Me!</h2>
        </section>
        

      </main>
    )
}
