// Author: [Your Name]
// Component: Footer
// Purpose: Displays the footer with copyright information.

import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-4 md:py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          &copy; 2021 Travel My Sri Lanka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;