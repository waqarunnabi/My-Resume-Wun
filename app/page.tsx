import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Header} from './components/Header'
import HomeIntro from './components/HomeIntro'
import { Socialicons } from './components/Socialicons'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Socialicons />
    <Header />
    <HomeIntro />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  
    </>
  )
}
