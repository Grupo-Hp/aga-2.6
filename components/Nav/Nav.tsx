import { useState } from 'react'

export const Nav = () => {

    const [mobileOpen, setMobileOpen] = useState(false)

    const link = "text-white mx-5 uppercase hover:text-red-500"
    const linha = 'w-8 h-1 bg-white mb-1'

    return (
        <header className={`duration-700 w-full h-20 bg-blue-900 ${mobileOpen ? 'h-screen' : ''}`}>
            <nav className={` flex items-start pt-7 md:items-center justify-between px-20 `}>
                <a href='#'>Logo</a>
                <ul className="hidden md:flex">
                    <li className={link}><a href="#">portfólio</a></li>
                    <li className={link}><a href="#">quem somos</a></li>
                    <li className={link}><a href="#">contato</a></li>
                </ul>
                <button className="md:hidden" onClick={() => setMobileOpen((currentValue) => !currentValue)}>
                    <div className={linha}></div>
                    <div className={linha}></div>
                    <div className={linha}></div>
                </button>
            </nav>
        </header>
    )
}

export default Nav