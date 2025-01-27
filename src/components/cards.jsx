// Card.js
import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
};
