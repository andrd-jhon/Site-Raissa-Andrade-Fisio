"use client";

import React from "react";

type NavLink = {
  label: string;
  href: string;
};

interface NavListProps {
  isMobile: boolean;
  open: boolean;
  links?: NavLink[];
  onItemClick?: () => void; // útil para fechar o menu mobile ao clicar
}

export default function NavList({
  isMobile,
  open,
  links = [
    { label: "Quem Sou", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contato", href: "#" },
  ],
  onItemClick,
}: NavListProps) {
  const baseUl =
    "flex gap-10 transition-all duration-300 mr-5"; // gap e mr mantidos; dá para mover para o pai se quiser
  const mobileUl =
    "flex-col items-center justify-center absolute top-0 left-0 w-full h-full gap-20 bg-[#84573C]";
  const desktopUl = "flex-row static";

  // opacidade/visibilidade apenas no mobile
  const visibility = isMobile
    ? open
      ? "opacity-95 visible"
      : "opacity-0 invisible"
    : "opacity-100 visible";

  return (
    <ul className={`${baseUl} ${isMobile ? mobileUl : desktopUl} ${visibility}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-xl text-white p-1 font-normal sublinhado-gradient"
            onClick={onItemClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}