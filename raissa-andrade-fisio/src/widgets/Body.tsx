'use client'

import CardPerfil from "@/components/CardPerfil";
import React from "react";

interface BodyProps {
  isWindowMobileProp : boolean
}

const Body = (props: BodyProps) => {
    
    return(
      <div className={`flex flex-row justify-between w-full border-2`}>
        <div className="absolute inset-0 bg-[url(/bgtexturaedit.png)] bg-[length:200px] opacity-10 py-[600px]"></div>
        <div className={`relative z-10 flex ${props.isWindowMobileProp ? `flex-col` : `flex-row`} justify-items-center w-full`}>
          <div className={`${props.isWindowMobileProp ? 'pt-5' : 'pr-20 pt-10'}`}>
            <CardPerfil 
              imageSource='/imgCardPerfil.jpg'
              description='Imagem da fisioterapeuta Raissa Andrade.'
              imageWidth={280}
              imageHeight={200}
              titulo='Raissa Andrade'
              subtitulo="Fisioterapeuta"
            ></CardPerfil>
          </div>
          <section className={`${props.isWindowMobileProp ? 'pt-[20px] flex flex-col justify-items-center items-center' : 'pl-20 pt-20'}`}>
            <h1 className='font-semibold text-'>FISIOTERAPIA PÉLVICA E OBSTÉTRICA</h1>
            <p className='w-75 text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure
              assumenda laudantium. Dolore ratione ea obcaecati natus ut quisquam,
              expedita saepe nam quaerat ab? Magni odio nobis dignissimos in earum
              doloribus fuga, pariatur quam ab id? Laboriosam odit dignissimos
              aspernatur quae obcaecati quidem iusto explicabo. Iusto aliquam at rem
              est architecto fuga maxime officia quas debitis excepturi. In dolores
              qui, deserunt, corrupti vel reprehenderit velit ab fuga amet quasi
              minima, cumque perspiciatis beatae nihil. Veritatis sed itaque facilis
              non exercitationem cupiditate ducimus, nobis eum doloremque sit vitae?
              Ex, nam?
            </p>
          </section> 
        </div>    
      </div>
    )
}

export default Body