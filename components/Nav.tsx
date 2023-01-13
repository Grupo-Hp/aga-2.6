import { useState } from 'react'
import Image from "next/image";

export const Link = (props: any) => {
  return <a className="px-5 py-5 border-secondary-10 border-b hover:bg-secondary-10 md:hover:bg-transparent md:px-0 md:py-0 md:border-none font-bold uppercase duration-300 text-sm md:hover:text-secondary-10" href={props.href}>{props.value}</a>
}

export const Nav = (props: any) => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const toogle = 'w-7 h-1 bg-white mb-1 transition-all duration-300 ease-in-out'

  return (
    <>
      <a href="./"
        className="flex absolute left-20 top-4"
      >
        <Image
          src="/logoAga.svg"
          width={150}
          height={150}
          alt="Logo da AGÁ Empreendimentos"

        /></a>
      <nav className={`bg-primary-10 text-white flex items-center md:justify-end px-12 py-16 md:px-24 border-b-4 border-secondary-10 ${mobileOpen ? 'h-screen md:h-28 duration-200' : "h-28 duration-200"}`}>

        <div className={`${mobileOpen ? 'md:hidden flex flex-col w-full border-t border-secondary-10' : 'hidden md:flex gap-x-10' }`}>
          {props.children}
        </div>

        <button className="md:hidden absolute top-14 right-10" onClick={() => setMobileOpen((currentValue) => !currentValue)}>
          <div className={`${toogle} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`${toogle} ${mobileOpen ? "hidden" : ""}`}></div>
          <div className={`${toogle} ${mobileOpen ? "-rotate-45" : ""}`}></div>
        </button>

      </nav>
    </>
  )
}

export default Nav