import { ReactElement, ReactNode } from "react"

type IHeader = {
    text: string
    subText: string
    children?: ReactNode
}

export const Header = ({ text, subText, children }: IHeader): ReactElement => {
    return (
        <div className="bg-header bg-right bg-cover h-[80vh] sm:pl-20 flex items-center">
            <div className="text-center sm:text-left">
                <h1 className="mx-10 sm:mx-0 sm:w-3/4 md:leading-snug text-3xl sm:text-5xl text-white uppercase">{text}</h1>
                <p className="text-white text-2xl sm:text-3xl font-extralight my-2">{subText}</p>
                {children}
            </div>
        </div>
    )
}