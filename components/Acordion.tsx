import { TbMountain, TbEye, TbDiamond } from 'react-icons/tb';
import { ReactElement } from "react"

export const Acordion = (): ReactElement => {

    const acordionDiv: string = `border-b-2 border-neutral-200`

    const acordionButton: string = `py-6 capitalize font-semibold group relative flex w-full items-center border-0 bg-white px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]`

    const acordionSpan: string = `ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-300 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none`

    const acordionInfo: string = `text-xl py-4 px-5 bg-zinc-100 text-primary-10 text-justify border-t-2 border-neutral-200`

    const icon = <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>

    return (
        <div className="bg-cyan-800">
            <div className="bg-mvv bg-cover py-28 flex justify-center items-center">
                <div id="accordionExample" className="w-full md:w-8/12 p-5">
                    <div
                        className={acordionDiv}>
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`${acordionButton} rounded-t-[15px]`}
                                type="button"
                                data-te-collapse-init
                                data-te-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne">
                                <span className="text-3xl"><TbMountain /></span>
                                <span className='px-3'>missão</span>
                                <span
                                    className={acordionSpan}>
                                    {icon}
                                </span>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="!visible"
                            data-te-collapse-item
                            data-te-collapse-show
                            aria-labelledby="headingOne"
                            data-te-parent="#accordionExample">
                            <div className={acordionInfo}>
                                <p>
                                    Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={acordionDiv}>
                        <h2 className="mb-0" id="headingTwo">
                            <button
                                className={acordionButton}
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo">
                                <span className="text-3xl"><TbEye /></span>
                                <span className='px-3'>visão</span>
                                <span
                                    className={acordionSpan}>
                                    <span
                                        className={acordionSpan}>
                                        {icon}
                                    </span>
                                </span>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingTwo"
                            data-te-parent="#accordionExample">
                            <div className={acordionInfo}>
                                <p>
                                    Ser referência no mercado de Construção Civil em comprometimento, ética profissional e qualidade, se consolidando como uma marca forte e única.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={acordionDiv}>
                        <h2 className="accordion-header mb-0" id="headingThree">
                            <button
                                className={acordionButton}
                                type="button"
                                data-te-collapse-init
                                data-te-collapse-collapsed
                                data-te-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree">
                                <span className='text-3xl'><TbDiamond /></span>
                                <span className='px-3'>valores</span>
                                <span
                                    className={acordionSpan}>
                                    <span
                                        className={acordionSpan}>
                                        {icon}
                                    </span>
                                </span>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="!visible hidden"
                            data-te-collapse-item
                            aria-labelledby="headingThree"
                            data-te-parent="#accordionExample">
                            <div className={acordionInfo}>
                                <p>
                                    Ética, Transparência e Integridade, buscando sempre as melhores soluções de mercado e construindo relacionamento de longo prazo com nossos clientes, parceiros e colaboradores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}