import { ChangeEventHandler, InputHTMLAttributes } from "react"

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    placeholder: string,
    state: ChangeEventHandler<HTMLInputElement> | undefined
}

export const Input = ({ label, placeholder, state }: iInputProps) => {
    return (
        <fieldset className="div-input">
            {label && <label htmlFor={label}>{label}</label>}
            <input onChange={state} type="text" id={label} placeholder={placeholder} />
        </fieldset>
    )
}