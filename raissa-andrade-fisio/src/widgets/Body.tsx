import CardPerfil from "@/components/CardPerfil/CardPerfil"

const Body = () => {
    return(
      <div className='flex flex-row pt-16 justify-between w-full h-screen'>
        <div className="absolute inset-0 bg-[url(/bgtexturaedit.png)] bg-[length:200px] opacity-20"></div>
        <div className="relative z-10 flex flex-row justify-between w-full">
          <CardPerfil 
            source='/imgCardPerfil.jpg'
            description='Imagem da fisioterapeuta Raissa Andrade.'
            width={290}
            height={200}
          ></CardPerfil>
          <section className=''>
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
          </section> 
        </div>    
      </div>
    )
}

export default Body