import { ReactElement } from "react"

interface IButton {
    value: string
    color: string
    hover: string
    type?: "button" | "submit" | "reset" | undefined;
    className?: string
}

export const Button = ({value, color, hover, type, className}: IButton): ReactElement => {
    return <button className={`${className} ${color} ${hover} ${type || 'submit'} duration-300 px-20 py-3 rounded-md font-semibold text-white uppercase my-3`}>{value}</button>
}