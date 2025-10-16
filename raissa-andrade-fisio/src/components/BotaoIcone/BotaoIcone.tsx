interface BotaoIconeProps{
    icone: React.ReactNode
}

const BotaoIcone = (props: BotaoIconeProps) => {
    return(
        <button>
            <a href="#"><span>{props.icone}</span></a>
        </button>
    )
}

export default BotaoIcone