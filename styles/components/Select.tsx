import { UseFormRegister, FieldValues } from "react-hook-form";
import { ReactNode, ReactElement } from "react"

type ISelect = {
    name: string;
    className?: string;
    placeholder: string;
    isDisabled?: boolean;
    defaultValue?: string;
    children: ReactNode;
    register: UseFormRegister<any>;
    onChange?: (e: any) => void;
}

export const Select = ({
    name,
    rules,
    children,
    register,
    placeholder,
    className,
    isDisabled = false,
    defaultValue = "",
    onChange,
}: ISelect & FieldValues): ReactElement => {
    return (
        <select
            disabled={isDisabled}
            {...register(name, rules)}
            defaultValue={defaultValue}
            onChange={onChange}
            aria-label={`Campo '${name}' selecionável`}
            className={`${className} placeholder:text-slate-400 border w-full border-slate-400 rounded px-5 py-2 ease-in-out form-control focus:outline-none focus:border-0 focus:border-primary-30 focus:ring-primary-30 focus:ring-1`}
        >
            <option className="italic text-slate-400" value="" disabled>
                {placeholder}
            </option>
            {children}
        </select>
    );
};