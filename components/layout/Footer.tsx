import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <p>© 2025 ALX Listing App</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
