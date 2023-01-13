import { useState } from 'react'

import Image from "next/image";

export const Nav = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const links = 'font-bold uppercase duration-300 hover:text-secondary-10 text-sm'
  const linkMobile = 'px-5 font-bold uppercase duration-300 hover:bg-secondary-10 text-sm border-b py-5 border-secondary-10'
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
        <ul className='hidden md:flex gap-x-10'>
          <li><a className={links} href="#">quem somos</a></li>
          <li><a className={links} href="#">serviços</a></li>
          <li><a className={links} href="#">contato</a></li>
        </ul>

        <button className="md:hidden absolute top-14 right-10" onClick={() => setMobileOpen((currentValue) => !currentValue)}>
          <div className={`${toogle} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`${toogle} ${mobileOpen ? "hidden" : ""}`}></div>
          <div className={`${toogle} ${mobileOpen ? "-rotate-45" : ""}`}></div>
        </button>

        <div className={`md:hidden flex flex-col w-full border-t border-secondary-10 ${mobileOpen ? "flex" : "hidden"}`}>
          <a className={linkMobile} href="#">quem somos</a>
          <a className={linkMobile} href="#">serviços</a>
          <a className={linkMobile} href="#">contato</a>
        </div>

      </nav>
    </>
  )
}

export default Nav