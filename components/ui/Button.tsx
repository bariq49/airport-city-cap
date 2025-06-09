import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-white
        text-black
        rounded-lg
        w-[200px]
        h-[57px]
        px-[43px]
        py-[15px]
        flex
        items-center
        justify-center
        gap-[10px]
        hover:opacity-90
        transition-opacity
        text-lg
        font-medium
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;