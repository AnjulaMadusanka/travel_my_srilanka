// Author: Anjula Madusanka
// Component: Header
// Purpose: Displays the logo, title, and navigation items.

import React from "react";
import logo from "../assets/logo.png";
import { Button } from "./buttons";

const Header = ({ navItems }) => {
  return (
    <header className="sticky top-0 bg-gray-100 py-4 md:py-6 lg:py-8 z-50 shadow-md font-sans">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 lg:px-20">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src={logo} 
            alt="Travel My Sri Lanka Logo" 
            className="h-8 md:h-10 lg:h-12 w-auto mr-3" 
          />
          <h1 className="text-lg md:text-xl lg:text-2xl font-serif font-bold">
            Travel My Sri Lanka
          </h1>
        </div>
        <nav className="space-x-2 md:space-x-4">
          {navItems.map((text, index) => (
            <Button 
              key={index} 
              variant="text" 
              className={`hover:underline text-sm md:text-base lg:text-lg ${text === "Home" ? "font-bold underline" : ""}`}
            >
              {text}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;