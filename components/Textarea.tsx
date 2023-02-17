import { ReactElement } from "react"

interface ITextarea {
    id?: string
    name?: string
    rows?: number
    placeholder: string;
}

export const Textarea = ({name, placeholder, id, rows}: ITextarea): ReactElement => {
    return <textarea className="placeholder:italic border border-slate-400 rounded px-5 py-2 ease-in-out resize-none
    form-control focus:outline-none focus:border-0 focus:border-primary-30 focus:ring-primary-30 focus:ring-1" name={name} placeholder={placeholder} id={id} rows={rows || 6} />
}