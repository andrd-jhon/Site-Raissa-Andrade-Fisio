import Image from 'next/image'

interface CardPerfilProps{
    source: string,
    description: string,
    width: number,
    height: number

}

const CardPerfil = (props: CardPerfilProps) => {
    return(
        <div className='w-86 size-130 flex items-center flex-col bg-[#D7BEA2] rounded-3xl'>
            <Image 
                className='mt-10 rounded-2xl'
                src={props.source}
                width={props.width}
                height={props.height}
                alt={props.description}
            />
            <h1 className='text-2xl'>Raissa Andrade</h1>
        </div>
    )
}

export default CardPerfil