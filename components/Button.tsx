import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded transition-all duration-200 focus:outline-none";
  
  const variants = {
    primary: "border-transparent text-white bg-drive-accent hover:bg-drive-accentHover shadow-lg shadow-[#9c2948]/20",
    outline: "border-gray-600 text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white",
    ghost: "border-transparent text-drive-accent hover:text-white hover:bg-gray-800"
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;