'use client'

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { BsLinkedin, BsGithub, BsCodeSquare } from 'react-icons/bs'

import { useState } from "react";

export default function NavBar() {

    return (

        <main className="text-xs sm:text-xl">
            <section>
                <nav className="py-5 px-4 mb-12 flex justify-between text-white-900 ">

                    <div className=" hidden sm:flex flex-row px-6">
                    <BsCodeSquare size={'2rem'} color='#F64C72' />
                    <a href="#home" className=" pl-4 text-2xl block text-white-900 font-bold">Nicolas Rossi</a>
                    </div>

                    <ul className="flex items-center m-auto">
                        <li className="">
                            <a href="#about" className=" px-4">About</a>
                        </li>
                        <li className="">
                            <a href="#projects" className=" px-4">Projects</a>
                        </li>
                        <li className=" ">
                            <a href="#contact" className=" px-4">Contact Me</a>
                        </li>
                    </ul>

                    <ul className="hidden sm:flex flex-row gap-2 items-center">
                        <li className="px-2 "><a href="https://www.linkedin.com/in/nicolas-d-rossi/" target="_blank"><BsLinkedin size={'2.75vh'} /></a></li>
                        <li className="px-2"><a href="https://github.com/N-Rossi" target="_blank"><BsGithub size={'2.75vh'}/></a></li>
                        <li className="px-4 py-2 min-h-fit rounded-lg bg-pink text-white-900 shadow-xl">
                            <a href="#" target="_blank">Resume</a>
                        </li>
                    </ul>
                    
                </nav>
            </section>
        </main>

    )
}