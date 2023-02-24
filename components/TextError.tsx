import { ReactElement } from "react";

type ITextError = {
    text: string
}

export const TextError = ({text}: ITextError):ReactElement => {
    return <span className="text-red-500 italic ml-2">{text}</span>
}