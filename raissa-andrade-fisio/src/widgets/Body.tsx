'use client'

import CardPerfil from "@/components/CardPerfil";
import React from "react";

const Body = () => {
  return (
    <div className="flex w-full justify-center">
      
      <div className="absolute inset-0 bg-[url(/bgtexturaedit.png)] bg-[length:200px] opacity-10"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-5xl px-4">

        <div className="pt-5 md:pt-10 md:pr-10">
          <CardPerfil 
            imageSource='/imgCardPerfil.jpg'
            description='Imagem da fisioterapeuta Raissa Andrade.'
            imageWidth={280}
            imageHeight={200}
            titulo='Raissa Andrade'
            subtitulo="Fisioterapeuta"
          />
        </div>

        <section className="pt-5 md:pt-20 md:pl-10 flex flex-col items-center md:items-start">

          <h1 className="font-semibold text-center md:text-left">
            FISIOTERAPIA PÉLVICA E OBSTÉTRICA
          </h1>

          <p className="max-w-md text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

        </section>

      </div>

    </div>
  )
}

export default Body