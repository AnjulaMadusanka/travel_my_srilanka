// Author: Anjula Madusanka
// This file contains Card and CardContent components used for displaying content in a styled card layout.

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
