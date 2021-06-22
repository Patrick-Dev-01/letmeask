import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss';

// todas as proprieades que um botão pode receber
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps){
    return (
        <button className="button" {...props}>Entrar na sala </button>
    )
}