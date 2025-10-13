"use client";

import { ReactElement } from "react";

type ButtonProps = {
    style?: 'primary' | 'secondary' | 'small' | 'outline' | 'hover';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
    Icon?: ReactElement;
    before?: boolean;
    after?: boolean;
    onClick?: () => void;
}

const styles = {
    primary: 'bg-brand text-white py-3 px-4 text-base',
    secondary: 'bg-white text-primary2 py-2 px-4 font-medium',
    small: 'bg-primary2 text-white py-1 px-4 font-normal',
    outline: 'border border-borderColor rounded-lg py-2 px-4 text-base text-primary2',
    hover: "w-full bg-primary2 hover:bg-primary py-4 text-base text-white font-medium leading-6 shadow-[0_10px_20px_0_rgba(0,0,0,0.1)]"
};

const Button = ({
    style = 'primary', // Default style to 'primary'
    className = '',
    type = 'button',
    name = '',
    Icon,
    before,
    after,
    onClick = () => { },
    ...props
}: ButtonProps) => {

    return (
        <button
            className={`${styles[style]} flex items-center justify-center gap-3 ${className} rounded-lg`}
            onClick={onClick} type={type} {...props}
        >
            {before && Icon && Icon}
            {name}
            {after && Icon && Icon}
        </button>
    );
};

export default Button;


/*
user guideline:
<Button name='test icon ' iconClassName="w-5 h-5 stroke-white" Icon={ArrowDown} after />
*/