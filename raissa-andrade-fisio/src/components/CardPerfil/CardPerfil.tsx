import Image from 'next/image'

interface CardPerfilProps{
    imageSource: string,
    description: string,
    imageWidth: number,
    imageHeight: number,
    titulo: string
}

const CardPerfil = (props: CardPerfilProps) => {
    return(
        <div className='w-86 size-130 flex items-center flex-col bg-[#D7BEA2] rounded-3xl'>
            <Image 
                className='mt-10 rounded-2xl'
                src={props.imageSource}
                width={props.imageWidth}
                height={props.imageHeight}
                alt={props.description}
            />
            <h1 className='text-2xl'>{props.titulo}</h1>
        </div>
    )
}

export default CardPerfil