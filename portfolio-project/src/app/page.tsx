import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>  
      <section id="home" className="text-white h-screen bg-darkBlue text-center flex">
        <h1 className="m-auto font-waterfall text-7x1 text-yellowGreen font-bold">Home</h1>
      </section>
      <section id="projects" className='text-white h-screen bg-lightBlue flex'>
        <h1 className='m-auto font-waterfall text-7x1 text-yellowGreen font-bold'>Projects</h1>
      </section>
      <section id="about" className='text-white h-screen bg-darkBlue text-center flex'>
        <h1 className='m-auto font-waterfall text-7x1 text-yellowGreen font-bold'>About me</h1>
      </section>
    </div>
    )
}
