import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {

    const title = 'text-md font-semibold'
    const ulBox = 'flex flex-col gap-y-4'
    const ulInfo = 'flex flex-col'
    const li = 'text-md text-slate-400 my-1 inline-block'
    const linkFooter = 'hover:text-slate-300 text-sm hover:underline underline-offset-2 duration-100'
    const info = 'text-md text-slate-400'
    const icon = 'text-3xl hover:text-slate-300 duration-100'
    const ano = new Date().getFullYear()

    return (
        <footer className="bg-primary-10 pt-9 md:px-0 px-9">
            <div className="grid grid-cols-3 gap-3 text-white container max-w-4xl mx-auto">
                <div className="col-span-2 md:col-span-1">
                    <ul className={ulBox}>
                        <ul>
                            <h1 className={title}>Onde estamos</h1>
                            <li className={info}>Av. Pref. Silvio Picanço, 463</li>
                            <li className={info}>Sala 708/711</li>
                            <li className={info}>Charitas - Niterói/RJ</li>
                            <li className={info}>CEP: 24360-030</li>
                        </ul>
                        <ul>
                            <h1 className={title}>Siga nossas redes</h1>
                            <div className="flex text-slate-400 gap-2 py-3">
                                <Link href="./contact"><li className={`${icon}`}><i><FaFacebook /></i></li></Link>
                                <Link href="./contact"><li className={`${icon}`}><i><FaInstagram /></i></li></Link>
                                <Link href="./contact"><li className={`${icon}`}><i><FaLinkedin /></i></li></Link>
                            </div>
                        </ul>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ul className={ulBox}>
                        <ul className={ulInfo}>
                            <h1 className={title}>Principais Lançamentos</h1>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>ItaipuMall</li></Link>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Aruã</li></Link>
                        </ul>
                        <ul className={ulInfo}>
                            <h1 className={title}>Serviços</h1>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Incorporação</li></Link>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Empreendimentos</li></Link>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Private Equity</li></Link>
                        </ul>
                        <ul className={ulInfo}>
                            <h1 className={title}>Precisa de ajuda?</h1>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Atendimento</li></Link>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Ouvidoria</li></Link>
                            <Link href="./contact"><li className={`${li} ${linkFooter}`}>Contato</li></Link>
                        </ul>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ul className={ulBox}>
                        <ul>
                            <h1 className={title}>Central de Relacionamento</h1>
                            <li className={info}>4042-1845 (Central AGÁ)</li>
                            <li className={info}>4040-4148 (Central Grupo HP)</li>
                            <li className={info}>De segunda a sexta, das 08h às 18h, exceto feriado.</li>
                            <li className={info}>contato@agaempreendimentos.com</li>
                        </ul>
                        <ul className={ulInfo}>
                            <h1 className={title}>Outras informações</h1>
                            <a href="https://www.hpcap.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>HP Capital</li></a>
                            <a href="https://www.hpbank.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>HP Bank</li></a>
                            <a href="/policy" target="_blank"><li className={`${li} ${linkFooter}`}>Politica de privacidade</li></a>
                            <a href="https://www.hpbank.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>Área do cliente</li></a>
                        </ul>
                        <ul className={ulInfo}>
                            <h1 className={title}>Área do parceiro</h1>
                            <a href="https://www.hpcap.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>GLPI</li></a>
                            <a href="https://www.hpbank.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>Webmail</li></a>
                            <a href="https://www.hpbank.com.br/" target='blank'><li className={`${li} ${linkFooter}`}>Operador</li></a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='text-center text-xs pt-9 pb-5 text-slate-400'>
                <span> &copy; AGÁ Empreendimentos {ano} - Todos os direitos reservados</span>
            </div>
        </footer>
    )
}