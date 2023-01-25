import { ReactElement, useEffect } from "react"
import { BiCookie } from 'react-icons/bi';

export const Policy = (): ReactElement => {

    useEffect(() => {
        const valor = localStorage.getItem('politica')
        if (valor) adicionarStorange()
    }, [])

    const adicionarStorange = () => {
        document.querySelector('.concordo')?.classList.add('hidden')
        localStorage.setItem('politica', 'ok')
    }

    const button = 'inline-block p-2.5 bg-zinc-300 text-primary-10 font-medium text-xs uppercase rounded hover:bg-zinc-400 transition duration-150'

    return (
        <div className="concordo fixed md:block hidden bg-primary-10 text-zinc-300 bottom-10 right-3 max-w-md p-3 rounded-md">
            <div className="flex gap-x-5 items-center">
                <div className="text-6xl"><BiCookie /></div>
                <div className="text-xs">
                    <p>Para trazer uma melhor experiência em nossos meios de comunicação, utilizamos
                        <i> cookies, localStorange</i> e outras tecnologias semelhantes para personalizar melhor os nosso
                        conteúdos. Clique em concordo para concordar com estas condições.
                    </p>
                </div>
            </div>
            <div className="flex gap-x-4 justify-end">
                <button onClick={adicionarStorange} type="button" className={button}>Recusar</button>
                <button onClick={adicionarStorange} type="button" className={button}>Concordo</button>
            </div>
        </div>
    )
}