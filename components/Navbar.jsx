"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingCart, User, Search, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "about" },
    { name: "Services", path: "services" },
    { name: "Previous Work", path: "work" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"}>
            <img
              className="h-16 w-32 object-fill rounded-md"
              width={32}
              height={32}
              src="/logo1.png"
              alt="Procut Logo"
            />
            </Link>
            {/* <span className="ml-2 text-white text-xl font-bold">ProCut</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.path}
                    className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium flex items-center"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-6">
              <div className="bg-orange-400 font-normal text-gray-900 text-md px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <span className="text-lg text-gray-900">
                  <Phone />
                </span>
                <span>078 519 4445</span>
              </div>
              {/* <div className="bg-orange-400 font-normal text-gray-900 text-sm px-4 py-2 rounded-md hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <span className="text-lg text-gray-900">
                  <Mail />
                </span>
                <span>procutmetalfab@gmail.com</span>
              </div> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
          {menuItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.path}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-semibold"
              >
                {item.name}
                {item.hasDropdown && <span className="ml-1 text-xs">+</span>}
              </a>
            </div>
          ))}
          {/* <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="px-3">
              <button className="text-gray-300 hover:text-orange-500 block w-full text-left px-3 py-2">
                <User size={20} className="inline mr-2" />
                <span>Account</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
