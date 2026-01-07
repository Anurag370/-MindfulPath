import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4 text-center text-gray-500">
      <p className="text-sm">
        © {new Date().getFullYear()} Code of Duty. All rights reserved.
      </p>

      <p className="mt-2 text-xs max-w-2xl mx-auto">
        Disclaimer: MindfulPath is an AI-assisted tool and not a substitute for
        professional medical advice, diagnosis, or treatment. If you are in
        crisis, please contact your local emergency services immediately.
      </p>
    </footer>
  );
};

export default Footer;
