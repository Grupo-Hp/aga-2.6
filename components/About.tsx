import { ReactElement } from "react"

export const About = ({ children }: any): ReactElement => {
    return (
        <div className="grid grid-cols-3 h-full">
            <div className="hidden lg:flex lg:col-span-1 bg-primary-10">01</div>
            <div className="col-span-3 lg:col-span-2 bg-gradient-to-r from-zinc-300 to-zinc-100 flex justify-center flex-col p-32 gap-y-8">
                <h1 className="text-primary-10 text-4xl font-semibold">AGÁ Empreendimentos</h1>
                <p className="text-gray-700 font-light text-2xl text-justify">Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.</p>
                <h3 className="text-2xl font-semibold text-primary-10">Seu sonho, nossa maior conquista!</h3>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}