import { ReactElement } from "react"

interface IInput {
    type?: string
    id?: string
    name?: string
    placeholder: string;
    className?: string
}

export const Input = ({type, name, placeholder, id, className}: IInput): ReactElement => {
    return <input className={`${className} placeholder:italic border w-full border-slate-400 rounded px-5 py-2 ease-in-out form-control focus:outline-none focus:border-primary-30 focus:ring-primary-30 focus:ring-1`} type={type || "text"} name={name} placeholder={placeholder} id={id} />
}