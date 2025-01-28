// Author: Anjula Madusanka
// Component: Footer
// Purpose: Displays the footer with copyright information.

import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-6 md:py-10 text-center font-sans">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base lg:text-lg">
          &copy; 2021 Travel My Sri Lanka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;