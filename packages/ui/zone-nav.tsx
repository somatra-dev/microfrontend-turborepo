'use client';

import React from 'react';
import { UserCom } from './UserComponet';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'iphone', href: '/iphone' },
  { label: 'ipad', href: '/ipad' },
  { label: 'macbook', href: '/macbook' }
];

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-12">
          {/* Logo */}
          <a href="/" className="font-bold text-xl">
            Apple
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <UserCom />
          </div>
        </div>
      </div>
    </nav>
  );
};
