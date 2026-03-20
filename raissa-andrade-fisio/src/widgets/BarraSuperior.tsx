"use client";

import React from "react";
import Image from "next/image";
import NavList from "@/components/NavList";

interface NavProps {
  isWindowMobileProp: boolean;
  openNavProp: boolean;
  setOpenNavProp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BarraSuperior({
  isWindowMobileProp,
  openNavProp,
  setOpenNavProp,
}: NavProps) {
  const toggle = () => setOpenNavProp((v) => !v);

  return (
    <nav
      role="navigation"
      aria-label="Barra de navegação"
      className="relative z-50 w-screen max-w-full h-[100px] bg-[#84573C] px-4 py-2 lg:px-8 lg:py-4 shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="ml-5">
          <Image
            src="/LogoProvisorio.png"
            alt="Logomarca"
            width={70}
            height={70}
            priority
          />
        </div>

        <div className="flex items-center gap-4">
          <div>
            <NavList
              isMobile={isWindowMobileProp}
              open={openNavProp}
              onItemClick={isWindowMobileProp ? () => setOpenNavProp(false) : undefined}
            />
          </div>

          {/* Botão hambúrguer apenas no mobile */}
          <button
            type="button"
            className={isWindowMobileProp ? "z-60 cursor-pointer mr-5" : "hidden"}
            onClick={toggle}
            aria-label={openNavProp ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={openNavProp}
            aria-controls="navlist"
          >
            {openNavProp ? (
              <svg
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="#fff"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="#fff"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
``