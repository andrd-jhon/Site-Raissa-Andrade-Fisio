import Link from "next/link";

export default function Footer() {
    return(
        <div className="container mx-auto p-5">
            <span className="text-lg font-semibold pb-3">
                &copy; Raissa Andrade de Santana
            </span>
            <ul className='flex flex-row gap-2'>
                <li><Link className='hover:text-red-500' href="/">Privacidade</Link></li>
                <li>&middot;</li>
                <li><Link className='hover:text-red-500' href="/">Termos</Link></li>
                <li>&middot;</li>
                <li><Link className='hover:text-red-500' href="/">Mapa do site</Link></li>
                <li>&middot;</li>
                <li><Link className='hover:text-red-500' href="/">Informações da empresa</Link></li>
            </ul>
        </div>
    )
}