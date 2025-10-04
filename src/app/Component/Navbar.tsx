"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed  w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-2xl font-semibold text-white tracking-tight">
          <Link href="/">Prathamesh</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium hover:text-gray-300 transition group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
