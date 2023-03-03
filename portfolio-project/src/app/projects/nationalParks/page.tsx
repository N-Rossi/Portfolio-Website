"use client"

import { projects } from '../../projects'
import { BsArrowRightCircle, BsArrowLeftCircle, BsLink, BsGithub, BsLinkedin } from "react-icons/bs"
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'

export default function NationalPark() {
    
    const project = {
        title: projects[0].title,
        content: projects[0].content,
        images: [
            projects[0].img1,
            projects[0].img2
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
        <>
            <section className='h-10v w-screen pt-6'>
                <nav className='flex flex-row justify-between px-10'>
                    <Link className=' font-bold' href={'/#projects'}><IoMdArrowRoundBack size={'2rem'} color={'black-900'} /></Link>
                    <Link className=' font-bold text-2xl hidden md:block' href={'/'}>Nicolas Rossi</Link>
                    <div className='hidden md:block'>
                        <ul className="hidden sm:flex flex-row gap-2 items-center">
                            <li className="px-2 "><a href="https://www.linkedin.com/in/nicolas-d-rossi/" target="_blank"><BsLinkedin size={'2.75vh'} /></a></li>
                            <li className="px-2"><a href="https://github.com/N-Rossi" target="_blank"><BsGithub size={'2.75vh'}/></a></li>
                            <li className="px-2 py-2 min-h-fit rounded-lg bg-black-900 text-white">
                                <a href="#" target="_blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className=' h-90v w-[100vw] p-6 flex justify-center items-center'>
                <div className=' bg-black-900 rounded-2xl p-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 h-[90%] md:h-[70%] w-11/12 md:w-[70%] shadow-lg'>
                    <div className=' justify-center md:justify-start flex flex-col tile'>
                        <h2 className=' text-xl md:text-5xl text-white font-bold '> {project.title} </h2>
                        <br />
                        <p className='py-4 text-white text-l flex-wrap'> {project.content} </p>
                        
                        <ul className="flex flex-row py-4 gap-6 justify-start">
                            <li className="px-2 py-2 min-h-fit rounded-lg font-bold "><a href="https://nationalparks-next.vercel.app/" target="_blank"><BsLink size="1.5rem" color='white' /></a></li>
                            <li className="px-2 py-2 min-h-fit rounded-lg font-bold"><a href="https://github.com/N-Rossi/nationalparks-next" target="_blank"><BsGithub size="1.5rem" color='white' /></a></li>
                        </ul>
                    </div>
                    <div className=' flex flex-col m-auto tile row-start-2 md:col-start-2 md:col-end-4'>
                        <img className=' rounded-lg' src={project.images[currentPage]} alt={`Page ${currentPage}`} />
                        <div className='  p-4 flex flex-row justify-center'>
                            <button className='pr-6' onClick={prevPage}><BsArrowLeftCircle size="2rem" color='white' /></button>
                            <span className='text-white my-auto'>{`Page    ${currentPage + 1}  of  ${project.images.length}`}</span>
                            <button className='pl-6' onClick={nextPage}><BsArrowRightCircle size="2rem" color='white' /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}