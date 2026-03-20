import '@/app/globals.css'
import Image from 'next/image'

interface CardPerfilProps{
    imageSource: string,
    description: string,
    imageWidth: number,
    imageHeight: number,
    titulo: string,
    subtitulo: string
}

const CardPerfil = (props: CardPerfilProps) => {
    return(
        <div className='w-86 h-130 flex items-center flex-col bg-[#D7BEA2] rounded-3xl shadow-2xl border-2 border-[#c7b39b]'>
            <Image 
                className='mt-10 rounded-2xl teste-sombra'
                src={props.imageSource}
                width={props.imageWidth}
                height={props.imageHeight}
                alt={props.description}
            />
            <h1 className='text-2xl'>{props.titulo}</h1>
            <h2 className='text-lg'>{props.subtitulo}</h2>
        </div>
    )
}

export default CardPerfil