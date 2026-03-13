'use client'

import React from "react";
import Image from "next/image"

interface barraSuperiorProps {
    isWindowMobileProp : boolean
    openNavProp : boolean
    setOpenNavProp : React.Dispatch<React.SetStateAction<boolean>>
}

export default function BarraSuperior(props: barraSuperiorProps) {

    const navList = (
        <ul className=
        {`flex gap-10 transition-all duration-300 mr-5
            ${props.isWindowMobileProp 
                ? `flex-col items-center justify-center absolute top-0 left-0 w-full h-full gap-20
                bg-[#84573C] 
                ${props.openNavProp ? "opacity-95 visible" : "opacity-0 invisible"}`
                : 'flex-row static opacity-100 visible'}
        `}>
            <li className="
                text-xl
                text-white
                p-1
                font-normal
                sublinhado-gradient
            "><a href="#">Quem Sou</a></li>
             <li className="
                text-xl
                text-white
                p-1
                font-normal
                sublinhado-gradient
            "><a href="#">Serviços</a></li>
             <li className="
                text-xl
                text-white
                p-1
                font-normal
                sublinhado-gradient
            "><a href="#">Contato</a></li>
        </ul>
    );

    return (
        <div className="w-screen shadow-2xl">
            <nav className="bg-[#84573C] top-0 relative z-50 h-[100px] max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="ml-5 w-[70px] h-[70px] object-contain">
                        <Image 
                        src={'/LogoProvisorio.png'}
                        alt=""
                        width={70}
                        height={70}
                        className="ml-5"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div>{navList}</div>

                        <button className={props.isWindowMobileProp ? 'z-20 cursor-pointer mr-5' : 'hidden'} onClick={() => {
                            props.setOpenNavProp(!props.openNavProp)
                        }}>
                            {props.openNavProp ? (
                                <svg
                                xmlns=""
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            ): 
                                <svg
                                xmlns=""
                                className="h-6 w-6"
                                fill="none"
                                stroke="#fff"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                            }
                        </button>
                     
                    </div>
                </div>
            </nav>
        </div>
    )
}
