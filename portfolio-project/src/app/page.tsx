import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>  
      <section id="home" className="text-brown h-screen bg-cream text-center flex">
        <h1 className="m-auto font-waterfall text-7x1 text-brown font-bold">Home</h1>
      </section>

      <div className={styles.creamToLightBrownWave}></div>

      <section id="projects" className='text-brown h-screen bg-lightBrown flex'>
        <h1 className='m-auto font-waterfall text-7x1 text-cream font-bold'>Projects</h1>
      </section>

      <div className={styles.lightBrownToMustardBrownWave}></div>

      <section id="about" className='text-brown h-screen bg-mustardBrown text-center flex'>
        <h1 className='m-auto font-waterfall text-7x1 text-brown font-bold'>About me</h1>
      </section>
    </div>
    )
}
