import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {

    const title = 'text-md font-semibold'
    const li = 'text-md text-slate-400 my-1'
    const info = 'text-md text-slate-400'
    const ano = new Date().getFullYear()

    return (
        <footer className="bg-primary-10 pt-9 md:px-0 px-9">
            <div className="grid grid-cols-3 gap-3 text-white container max-w-4xl mx-auto">
                <div className="col-span-2 md:col-span-1">
                    <h1 className={title}>Onde estamos</h1>
                    <ul className="flex flex-col gap-y-4">
                        <ul>
                            <li className={info}>Av. Pref. Silvio Picanço, 463</li>
                            <li className={info}>Sala 708/711</li>
                            <li className={info}>Charitas - Niterói/RJ</li>
                            <li className={info}>CEP: 24360-030</li>
                        </ul>
                        <ul>
                            <h1 className={title}>Siga nossas redes</h1>
                            <div className="flex text-3xl text-slate-400 gap-2 py-3">
                                <i><FaFacebook /></i>
                                <i><FaInstagram /></i>
                                <i><FaLinkedin /></i>
                            </div>
                        </ul>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className={title}>Lançamentos</h1>
                    <ul className="flex flex-col gap-y-4">
                        <ul>
                            <li className={li}>ItaipuMall</li>
                            <li className={li}>Aruã</li>
                        </ul>
                        <ul>
                            <h1 className={title}>Precisa de ajuda?</h1>
                            <li className={li}>Atendimento</li>
                            <li className={li}>Ouvidoria</li>
                            <li className={li}>Contato</li>
                        </ul>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className={title}>Central de Relacionamento</h1>
                    <ul className="flex flex-col gap-y-4">
                        <ul>
                            <li className={info}>4042-1845 (Central AGÁ)</li>
                            <li className={info}>4040-4148 (Central Grupo HP)</li>
                            <li className={info}>De segunda a sexta, das 08h às 18h, exceto feriado.</li>
                            <li className={info}>contato@agaempreendimentos.com</li>
                        </ul>
                        <ul>
                            <h1 className={title}>Outras informações</h1>
                            <li className={li}>HP Capital</li>
                            <li className={li}>HP Bank</li>
                            <li className={li}>Politica de privacidade</li>
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