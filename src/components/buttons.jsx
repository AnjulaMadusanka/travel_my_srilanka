// Button.js
import React from "react";

export const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    link: "text-blue-600 hover:underline",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
