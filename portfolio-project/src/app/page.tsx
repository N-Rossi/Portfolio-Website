"use client"

import React, { useRef, useState } from 'react';
import { Inter } from '@next/font/google'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {skills} from './skills'
import { projects } from './projects'
import Link from 'next/link'
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  let serviceKey: string

  const form = useRef<HTMLFormElement>(null);

  if(process.env.NEXT_PUBLIC_SERVICE_KEY === undefined) {
    serviceKey =  "err"
  }
  else {
    serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
    if (form.current) {

      try {
        emailjs.sendForm(serviceKey, 'template_8lm0e45', form.current, 'a8rTC_T5gOyeDESnY')
          .then((result: EmailJSResponseStatus) => {
              console.log(result.text);
              console.log("Message Sent!")
              alert("Message Sent!")
              setName("")
              setEmail("")
              setMsg("")
          }, (error: EmailJSResponseStatus) => {
              console.log(error.text);
          });
      }
      catch(error) {
        console.error(error);
        alert("There was an error on our end! You can send your email manually to nick413rossi@gmail.com. I am sorry for the inconvenience ")
      }
    }
  };

  return (
      <main className="">
        <div className="bg-hero h-100v bg-cover bg-center bg-no-repeat">
          <section>
            <NavBar />
          </section>
          <section id="home" className='flex align-top flex-col h-100v w-11/12 m-auto min-h-100v'>
            <div className='flex justify-start align-top content-start flex-col'>
              <p className=' text-lg text-white-900 py-2'>Hello, my name is</p>
              <h1 className=' text-6xl sm:text-7xl font-semibold text-white-900'>Nicolas Rossi</h1>
              <br/>
              <h2 className=' text-5xl sm:text-6xl text-white-200'>I am a software developer who is passionate about building applications that are highly functional and user friendly!</h2>
              <br />
              <ul className=" hidden sm:flex flex-row justify-start p-4 gap-4">
                  <li className="px-4 py-2 min-h-fit rounded-lg bg-pink text-white-900 shadow-xl"><a href="https://www.linkedin.com/in/nicolas-d-rossi/" target="_blank">LinkedIn</a></li>
                  <li className="px-4 py-2 min-h-fit rounded-lg bg-pink text-white-900 shadow-xl "><a href="https://github.com/N-Rossi" target="_blank">Github</a></li>
                  <li className="px-4 py-2 min-h-fit rounded-lg bg-pink text-white-900 shadow-xl "><a href='/Nicolas-Rossi-Resume-2023.pdf' target={'_blank'}>Resume</a></li>
                  <li className="px-4 py-2 min-h-fit rounded-lg bg-pink text-white-900 shadow-xl "><a href="#contact" >Get in Touch</a></li>
              </ul>
            </div>
          </section>
        </div>

        <section id="about" className='flex align-top flex-col sm:flex-row min-h-100v w-11/12 m-auto'>

          <div className="flex align-top flex-col w-11/12 m-auto min-h-70v">
              <div className="flex justify-start align-top content-start flex-col">
              <h2 className='text-5xl py-10 text-pink font-bold'>About Me</h2>
                  <p className=" text-purple-300 text-xl sm:text-5xl">
                      I am a Software Developer who loves to use my skills
                      to build things! I have received a Bachelors Degree in Computer Science
                      with a minor in Mathematics and a concentration in Cyber Security. I work professionally as a Software Developer and
                      am always trying to learn something new each and every day.
                  </p>
              </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:py-0 min-w-[50%]">
                  {skills.map((items, key) => (
                    <div className=" relative p-4 shadow-xl lg:max-w-lg m-auto rounded-md hover:scale-105 duration-300" key={key}>
                      <div className=' absolute left-2 top-2 text-blue-500'>
                        {items.img}
                      </div>
                      <div className="space-y-2 pt-6">
                          <h3 className="text-2xl font-semibold justify-center flex text-blue-700">
                              {items.title}
                          </h3>
                      </div>
                    </div>
                  ))}
              </div>
        </section>
        <div className=" h-90v bg-about bg-cover bg-center bg-no-repeat">
        </div>

        <div className=' bg-project bg-cover bg-center bg-no-repeat'>
          <section id="projects" className='text-center flex flex-col min-h-100v p-10 '>
            <h2 className='text-5xl sm:text-7xl p-10 text-pink font-semibold'>Projects</h2>
            <br/>
            <br />
            <div className=' container grid grid-cols-1 m-auto gap-12 w-full sm:w-1/2'>
              {projects.map((items, key) => (
                      <Link className="grid min-h-1/4 object-contain justify-center relative hover:scale-110 duration-500 hover:shadow-lg" key={key} href={{pathname: `/projects/${items.id}`}} >
                        <img src={items.cardImg} className=" w-screen rounded-xl"/>
                        <div className='opacity-100 sm:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-start items-end text-3xl text-white-900 font-semibold'>
                          <div className='flex flex-col bg-gradient-to-t from-black-300 to-transparent w-full'>
                            <h3 className='text-start text-md sm:text-4xl px-2'>{items.title}</h3>
                            <p className='text-start text-sm sm:text-2xl px-2 '>{items.subtitle}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
            </div>
          </section>
        </div>

        <div className="bg-about bg-cover bg-no-repeat bg-center">

          <section id="contact" className='text-center py-10 p-10 flex align-top flex-col h-100v '>
            <h2 className='text-5xl sm:text-7xl p-10 text-pink font-bold'>Contact Me</h2>
            <br/>
            <div className=" flex justify-center p-6">
              <form ref={form} onSubmit={sendEmail} className=" w-full sm:w-1/2">
                <div className="flex flex-wrap sm:flex-nowrap -mx-3 mb-6">
                  <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
                    <label className='flex pl-2 uppercase tracking-wide text-purple-500 text-md font-bold mb-2'>Name</label>
                    <input type="text" name="user_name" onChange={event => setName(event.target.value)} value={name} className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' />
                  </div>
                  <div className="w-full px-3">
                    <label className='flex pl-2 uppercase tracking-wide text-purple-500 text-md font-bold mb-2' >Email</label>
                    <input type="email" name="user_email" onChange={event => setEmail(event.target.value)} value={email} className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className='flex pl-2 uppercase tracking-wide text-purple-500 text-md font-bold mb-2' >Message</label>
                    <textarea name="message" onChange={event => setMsg(event.target.value)} value={msg} className='appearance-none block w-full h-20v bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <button type="submit" value="Send" className='px-4 py-2 min-h-fit w-20 rounded-lg bg-pink text-white-900'>Submit</button>
                  </div>
                </div>
              </form>
            </div>

          </section>
        </div>
        

      </main>
    )
}
