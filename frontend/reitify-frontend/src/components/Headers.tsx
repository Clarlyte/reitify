import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">Reitify</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/indicators" className="text-gray-700 hover:text-gray-900">
            Indicators
          </Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
