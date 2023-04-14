"use client"

import { projects } from '../../projects'
import { BsArrowRightCircle, BsArrowLeftCircle, BsLink, BsGithub, BsLinkedin } from "react-icons/bs"
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'

export default function RunSignupTimer() {
    
    const project = {
        title: projects[1].title,
        content: projects[1].content,
        images: [
            projects[1].img1,
            projects[1].img2,
            projects[1].img3,
        ],
    }
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
      setCurrentPage((prevPage) => (prevPage + 1) % project.images.length);
    };
  
    const prevPage = () => {
      setCurrentPage((prevPage) =>
        prevPage === 0 ? project.images.length - 1 : prevPage - 1
      );
    };
  
    return (
        <div className=' bg-port-img bg-cover bg-center text-white-900 min-h-100v md:h-100v md:overflow-hidden'>
            <section className='h-10v w-screen pt-6 '>
                <nav className='flex flex-row md:justify-between px-10'>
                    <Link className=' font-bold' href={'/#projects'}><IoMdArrowRoundBack size={'2rem'} color={'black-900'} /></Link>
                    <Link className=' font-bold text-2xl hidden md:block' href={'/'}>Nicolas Rossi</Link>
                    <div className='hidden md:block'>
                        <ul className="hidden sm:flex flex-row gap-2 items-center">
                            <li className="px-2 "><a href="https://www.linkedin.com/in/nicolas-d-rossi/" target="_blank"><BsLinkedin size={'2.75vh'} /></a></li>
                            <li className="px-2"><a href="https://github.com/N-Rossi" target="_blank"><BsGithub size={'2.75vh'}/></a></li>
                            <li className="px-2 py-2 min-h-fit rounded-lg bg-purple-300 text-white-900 ">
                            <a href='/Nicolas-Rossi-Resume-2023.pdf' target="_blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className=' md:h-100v w-[100vw] p-6 flex justify-center items-center'>
                <div className=' bg-runCard bg-cover bg-no-repeat bg-center rounded-2xl p-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 md:h-[70%] w-full md:w-[70%] shadow-xl'>
                    <div className=' justify-center md:justify-start flex flex-col tile md:col-start-1 md:col-end-3'>
                        <h2 className=' text-lg md:text-5xl text-blue-700  font-bold '> {project.title} </h2>
                        <br />
                        <p className='py-4 text-blue-500 text-sm md:text-lg flex-wrap'> {project.content} </p>
                        
                        <ul className="flex flex-row py-4 gap-6 justify-start">
                            <li className="px-2 py-2 min-h-fit rounded-lg font-bold "><a href="/runSignup/runSignupPoster.pdf" target="_blank"><BsLink size="1.5rem" color='#2F2FA2' /></a></li>
                            <li className="px-2 py-2 min-h-fit rounded-lg font-bold"><a href="https://github.com/RunSignUp-Team/RunSignup-Mobile-Timing-App" target="_blank"><BsGithub size="1.5rem" color='#2F2FA2' /></a></li>
                        </ul>
                    </div>
                    <div className=' flex flex-col m-auto tile row-start-2 md:col-start-3 md:col-end-4 '>
                        <img className=' rounded-lg  object-scale-down h-50v ' src={project.images[currentPage]} alt={`Page ${currentPage}`} />
                        <div className='  p-4 flex flex-row justify-center'>
                            <button className='pr-6' onClick={prevPage}><BsArrowLeftCircle size="2rem" color='#2F2FA2' /></button>
                            <span className='text-blue-700 my-auto'>{`Page    ${currentPage + 1}  of  ${project.images.length}`}</span>
                            <button className='pl-6' onClick={nextPage}><BsArrowRightCircle size="2rem" color='#2F2FA2' /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}