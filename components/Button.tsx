import { ReactElement } from "react"

interface Props {
    value: string
    color: string
    hover: string
}

export const Button = ({value, color, hover}: Props): ReactElement => {
    return <button className={`${color} ${hover} duration-300 px-20 py-3 rounded-md font-semibold text-white uppercase my-3`}>{value}</button>
}