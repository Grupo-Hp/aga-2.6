import styles from "../styles/politica.module.css"
import { ReactElement, useEffect } from "react"
import { BiCookie } from 'react-icons/bi';
import { CgCloseO } from 'react-icons/cg';


export default function Policy(): ReactElement {

    useEffect(() => {
        const valor = localStorage.getItem('politica')
        if (valor) addStorage()
    }, [])

    const addStorage = () => {
        document.querySelector('.concordo')?.classList.add('lg:hidden')
        localStorage.setItem('politica', 'ok')
    }

    const refuseStorage = () => {
        document.querySelector('.concordo')?.classList.add('lg:hidden')
    }

    const button = 'inline-block p-2.5 bg-zinc-300 text-primary-10 font-medium text-xs uppercase rounded hover:bg-zinc-400 transition duration-300'

    return (
        <div className={`${styles.containerFluid} concordo fixed md:block hidden bg-primary-10 text-zinc-300 bottom-10 right-3 max-w-md p-3 rounded-md`}>
            <div className="flex gap-x-5 items-center">
                <div className="text-6xl"><BiCookie /></div>
                <div className="text-xs">
                    <button onClick={refuseStorage} className="absolute right-2 text-lg hover:text-zinc-400 duration-300"><CgCloseO /></button>
                    <p>Para trazer uma melhor experiência em nossos meios de comunicação, utilizamos
                        <i> cookies, localStorange</i> e outras tecnologias semelhantes para personalizar melhor os nosso
                        conteúdos. Clique em concordo para concordar com estas condições.
                    </p>
                </div>
            </div>
            <div className="flex gap-x-4 justify-end">
                <a href="/policy" target="_blank" className={button}>politica</a>
                <button onClick={addStorage} type="button" className={button}>aceitar todos</button>
            </div>
        </div>
    )
}