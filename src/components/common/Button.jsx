import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseStyles = "px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 text-sm inline-block";
  
  const variants = {
    primary: "bg-brand-blue text-brand-text hover:bg-white hover:text-brand-blue shadow-lg shadow-brand-blue/20",
    outline: "border border-white/20 text-brand-text hover:bg-white hover:text-brand-dark",
    white: "bg-white text-black hover:bg-brand-blue hover:text-brand-text"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;