import { ReactNode, ReactElement } from "react"

import { Nav } from '../components/Nav'
import { Footer } from "./Footer"

type IMainContainer = {
    children: ReactNode;
}

export const MainContainer = ({children}: IMainContainer): ReactElement => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}