
import BarraSuperior from '@/widgets/BarraSuperior'
import React from 'react'
import CardPerfil from '@/components/CardPerfil/CardPerfil'

export default function Home() {
 
  
  return (
    <div className="w-screen justify-items-center">
      <BarraSuperior></BarraSuperior>
      <div className='flex m-7 flex-row mt-20 justify-between w-[900] bg-[url(/bgtextura.png)] bg-repeat-space'>
        <CardPerfil 
          source='/imgCardPerfil.jpg'
          description='Imagem da fisioterapeuta Raissa Andrade.'
          width={290}
          height={200}
        ></CardPerfil>
        <div className=''>
          <h1 className='font-semibold'>FISIOTERAPIA PÉLVICA E OBSTÉTRICA</h1>
          <p className='text-justify w-75'>
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
