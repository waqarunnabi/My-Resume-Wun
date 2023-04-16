import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Header} from './components/Header'
import HomeIntro from './components/HomeIntro'
import { Socialicons } from './components/Socialicons'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import Contact from './components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Socialicons />
    <Header />
    <HomeIntro />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  
    </>
  )
}
