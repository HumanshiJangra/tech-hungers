import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: string; // Optional prop to determine if it's a link
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href, className }) => {
    const baseStyles = "flex items-center gap-2.5 bg-[radial-gradient(at_top_left,_#15172a_0%,_#353c71_65%)] text-white text-base px-8 py-3 text-center rounded-[15px]";
    
    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${className}`}>
                {text}
            </Link>
        );
    }
    
    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {text}
        </button>
    );
};

export default Button;