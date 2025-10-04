import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-neutral-800 bg-black text-gray-400 px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Prathamesh</h3>
          <p className="text-sm text-gray-500">
            Building scalable & modern web applications
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:your@email.com"
            className="hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Prathamesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
