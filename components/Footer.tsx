

export const Footer = () => {

    const title = 'text-md font-semibold'
    const li = 'text-md text-slate-400 py-1'
    const info = 'text-md text-slate-400'

    return (
        <footer className="bg-primary-10 py-16">
            <div className="grid grid-cols-4 gap-3 text-white container mx-auto">
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
                            <li className={info}>Av. Pref. Silvio Picanço, 463</li>
                            <li className={info}>Sala 708/711</li>
                            <li className={info}>Charitas - Niterói/RJ</li>
                            <li className={info}>CEP: 24360-030</li>
                        </ul>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h1 className={title}>Lançamentos</h1>
                    <ul className="flex flex-col gap-y-4">
                        <ul>
                            <li className={li}>ItaipuMall</li>
                            <li className={li}>Aruã</li>
                            <li className={li}>Charitas - Niterói/RJ</li>
                            <li className={li}>CEP: 24360-030</li>
                        </ul>
                        <ul>
                            <h1 className={title}>Precisa de ajuda?</h1>
                            <li className={li}>Atendimento</li>
                            <li className={li}>Ouvidoria</li>
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
                    </ul>
                </div>
            </div>

        </footer>
    )
}