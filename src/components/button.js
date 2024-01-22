import * as React from "react";

const Button = ({ children, className = '' }) => {
  return (
    <button
      type="button"
      className={`
        ${className}
        relative overflow-hidden
        py-3 px-16 font-regular uppercase font-base1 font-medium text-white bg-transparent 
        border border-pink1 rounded-full
        transition-colors duration-300 ease-in-out hover:bg-pink1 hover:text-background
      `}
    >
      {children}
    </button>
  );
};

export default Button;
