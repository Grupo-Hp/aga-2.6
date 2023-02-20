import { Nav, LinkNav } from '../components/Nav'
import { Footer } from "./Footer"

interface Props {
    children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
    return (
        <>
            <Nav>
                <LinkNav href="./contact" value="quem somos" />
                <LinkNav href="./contact" value="serviços" />
                <LinkNav href="./contact" value="contato" />
            </Nav>
            {children}
            <Footer />
        </>
    )
}