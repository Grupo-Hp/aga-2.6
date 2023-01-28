import { ReactElement } from 'react'
import Image from "next/image";

export const PolicyNav = (): ReactElement => {

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
      <nav className={`bg-primary-10 mb-10 text-white flex scroll-m-0 items-center justify-end px-12 py-16 md:px-24 border-b-4 border-secondary-10 h-28`}>
      <a href="/documents/policy-aga.pdf" download="Politica de privacidade AGÁ" target='_blank' className='uppercase font-bold hover:text-secondary-10 duration-300 text-sm'>versão impressa</a>
      </nav>
    </>
  )
}