
import BarraSuperior from '@/widgets/BarraSuperior'
import React from 'react'
import Image from "next/image"
import imgPerfilCard from '../assets/imgCardPerfil.jpg'


export default function Home() {
 
  
  return (
    <div className="">
      <BarraSuperior></BarraSuperior>
      <div className='flex justify-between'>
        <Image src={imgPerfilCard} alt={'Imagem da fisioterapeuta Raissa Andrade.'} width={100} height={100}></Image>
        <div className='w-100'>
          <h1 className=''>FISIOTERAPIA PÉLVICA E OBSTÉTRICA</h1>
          <p>
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
        </div>
      </div>
    </div>
  );
}
