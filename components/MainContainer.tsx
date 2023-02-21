import { Nav } from '../components/Nav'
import { Footer } from "./Footer"

interface Props {
    children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}