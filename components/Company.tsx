import { ReactElement } from "react"
import { TbMountain, TbEye, TbDiamond } from 'react-icons/tb';

interface Props {
    icon?: any
    title: string
    info: string
}


export const Card = ({ icon, title, info }: Props): ReactElement => {
    return (
        <div className="max-w-3xl lg:max-w-sm grid grid-cols-3 lg:flex lg:flex-col gap-10 items-center">
            <div className="col-span-1 flex items-center flex-col">
                <h1 className="text-7xl text-center">{icon}</h1>
                <h1 className="text-3xl text-center uppercase font-normal">{title}</h1>
            </div>
            <div className="col-span-2">
                <p className="xl:text-xl">{info}</p>
            </div>
        </div>
    )
}


export const Company = (): ReactElement => {
    return (
        <div>
            <div className="flex justify-center items-center p-8 lg:p-20 bg-company bg-cover lg:h-[70vh]">
                <div className="grid grid-cols-2 lg:h-92">
                    <div className="col-span-2 lg:col-span-1 items-center flex flex-col my-auto">
                        <span className="text-7xl capitalize font-extralight text-gray-700">quem</span>
                        <span className="text-7xl lg:ml-48 mb-5 capitalize font-light text-primary-10">somos</span>
                    </div>
                    <div className="col-span-2 lg:col-span-1 lg:border-l-2 font-light lg:text-2xl text-justify lg:border-primary-10 items-center flex pl-10">Somos a Agá Empreendimentos, referencial para quem busca refinamento e requinte arquitetônico. Estamos localizados em Charitas, uma das áreas mais importantes da cidade de Niterói. Atuamos com Projetos, Reformas, Construção e Incorporação Imobiliária, tendo amplo destaque no cenário Fluminense.</div>
                </div>
            </div>

            <div className="bg-cyan-900 r text-white">
                <div className="bg-mvv bg-cove flex py-16 px-5">
                    <div className="mx-auto flex flex-col xl:flex-row xl:justify-around gap-y-5 xl:gap-x-16">
                        <Card icon={<TbMountain />} title="missão" info="Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros." />

                        <Card icon={<TbEye />} title="visão" info="Ser referência no mercado de Construção Civil em comprometimento, ética profissional e qualidade, se consolidando como uma marca forte e única." />

                        <Card icon={<TbDiamond />} title="valores" info="Ética, Transparência e Integridade, buscando sempre as melhores soluções de mercado e construindo relacionamento de longo prazo com nossos clientes, parceiros e colaboradores." />
                    </div>
                </div>
            </div>
        </div>
    )
}