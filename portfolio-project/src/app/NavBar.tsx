'use client'

import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { useState } from "react";

export default function NavBar() {

    return (

        <main className="text-xs sm:text-xl">
            <section>
                <nav className="py-5 px-4 mb-12 flex justify-between text-black-900 ">

                    <a href="#home" className=" px-10 hidden sm:block">Nicolas Rossi</a>

                    <ul className="flex items-center">
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
                        <li className="px-4 py-2 min-h-fit rounded-lg bg-black-900 text-white">
                            <a href="#" target="_blank">Resume</a>
                        </li>
                    </ul>
                    
                </nav>
            </section>
        </main>

    )
}