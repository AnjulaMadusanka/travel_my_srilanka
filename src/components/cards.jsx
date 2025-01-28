// Card.js
import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`text-gray-800 ${className}`}>{children}</div>;
};
