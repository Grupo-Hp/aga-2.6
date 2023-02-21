import { ChangeEventHandler } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";

interface IInput {
    className?: string;
    type?: string;
    name: string;
    rules?:
    | Partial<{
        required: string | ValidationRule<boolean>;
        min: ValidationRule<string | number>;
        max: ValidationRule<string | number>;
        deps: string | string[];
    }>
    | undefined;
    label?: string;
    placeholder: string;
    isDisabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    onClick?: () => void;
    register: UseFormRegister<any>;
    id?: string;
    value?: string;
    maxLength?: number;
    onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    errors: any;
}

export const Input = ({

    className,
    name,
    rules,
    register,
    placeholder,
    onChange,
    onClick,
    type = "text",
    isDisabled = false,
    id,
    value,
    maxLength,
    onPaste,
}: IInput) => {
    return (
        <>
            <input
                onPaste={onPaste}
                onClick={onClick}
                {...register(name, rules)}
                maxLength={maxLength}
                onChange={onChange}
                disabled={isDisabled}
                placeholder={placeholder}
                type={type}
                id={id}
                value={value}
                className={`${className} placeholder:italic border w-full border-slate-400 rounded px-5 py-2 ease-in-out form-control focus:outline-none focus:border-0 focus:border-primary-30 focus:ring-primary-30 focus:ring-1`}
            />
            {/* <span className="text-red-500 italic ml-2 mt-1">{errors[name] && errors[name]?.message}</span> */}
        </>
    )
};