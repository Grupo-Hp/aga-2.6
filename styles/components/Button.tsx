import { ReactElement } from "react"

type IButton = {
    value: string
    color: string
    hover: string
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
}

export const Button = ({value, color, hover, type = 'submit', className}: IButton): ReactElement => {
    return <button className={`${className} ${color} ${hover} ${type} duration-300 px-20 py-3 rounded-md font-semibold text-white uppercase my-3`}>{value}</button>
}