import { ReactElement } from "react";

interface ITextError {
    text: string
}

export const TextError = ({text}: ITextError):ReactElement => {
    return <span className="text-red-500 italic ml-2">{text}</span>
}