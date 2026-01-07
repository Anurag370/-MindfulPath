import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center border-t py-4 border-gray-200 text-gray-500">
      © {new Date().getFullYear()} Code of Duty. All rights reserved.
    </footer>
  );
};

export default Footer;