'use client'
import Footer from '@/widgets/Footer';
import BarraSuperior from '@/widgets/BarraSuperior'
import Body from '@/widgets/Body';
import React from 'react'
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
})

export default function Home() {
 
  const [isWindowMobile, setIsWindowMobile] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640){
        setIsWindowMobile(false)
        setOpenNav(false)
      }else{
        setIsWindowMobile(true)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
        window.removeEventListener("resize", handleResize)
    }
  }, [])

  React.useEffect(() => {
  const html = document.documentElement

  if (openNav) {
    document.body.style.overflow = "hidden"
    html.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
    html.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
    html.style.overflow = "auto"
  }
}, [openNav])

  return (
    <div className={`w-screen justify-items-center ${josefin.className}`}>
        <BarraSuperior
        isWindowMobileProp = {isWindowMobile}
        openNavProp = {openNav}
        setOpenNavProp = {setOpenNav}
      />
      <main>
        <Body/>
      </main>
      <Footer/>
    </div>
  );
}
