// Author: Anjula Madusanka
// This file contains Button components used for various button styles and functionalities in the application.

import React from "react";

export const Button = ({ children, className, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300 ease-in-out transform";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
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
