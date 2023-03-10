import { ReactElement } from "react"
import Link from 'next/link';

import { Button } from '../styles/components/Button'

export const Header = (): ReactElement => {
    return (
        <div className="bg-header bg-right bg-cover h-[80vh] sm:pl-20 flex items-center">
            <div className="text-center sm:text-left">
                <h1 className="mx-10 sm:mx-0 sm:w-3/4 md:leading-snug text-3xl sm:text-5xl text-white uppercase">requinte e sofisticação em forma de traços</h1>
                <p className="text-white text-2xl sm:text-3xl font-extralight my-2">Conheça a AGÁ Empreendimentos</p>
                <Link href="./contact"><Button color="bg-primary-10" hover="hover:bg-primary-20" value="saiba mais" /></Link>
            </div>
        </div>
    )
}