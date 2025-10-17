'use client'

import React from "react";

export default function BarraSuperior() {

    const [openNav, setOpenNav] = React.useState(false);
    const [isWindowMobile, setIsWindowMobile] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth >= 640){
                setOpenNav(false)
                setIsWindowMobile(false)
            }else{
                setIsWindowMobile(true)
            }
        }
        );
    }, []);

    const navList = (
        <ul className=
        {`flex gap-10 transition-all duration-300 
            ${isWindowMobile 
                ? `flex-col items-center justify-center absolute top-0 left-0 w-full h-full gap-20
                bg-[#84573C] 
                ${openNav ? "opacity-95 visible" : "opacity-0 invisible"}`
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
        <div className="max-h-[768px] overflow-scroll mb-3">
            <nav className="bg-[#84573C] top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <a href="">Logo Aqui!</a>
                    <div className="flex items-center gap-4">
                        <div>{navList}</div>

                        <button className={isWindowMobile ? 'z-1' : 'hidden'} onClick={() => {
                            setOpenNav(!openNav)
                        }}>
                            {openNav ? (
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
