'use client'
import Footer from '@/widgets/Footer';
import BarraSuperior from '@/widgets/BarraSuperior'
import Body from '@/widgets/Body';
import React from 'react'

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

  return (
    <div className="w-screen justify-items-center">
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
