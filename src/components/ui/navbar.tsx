"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsInstagram, BsSearch } from "react-icons/bs";
import { FaBlog, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Categories",
    href: "/categories",
    subItems: [
      { label: "Politics", href: "/categories/politics" },
      { label: "Health", href: "/categories/health" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  { label: "Lifestyle", href: "/categories/lifestyle" },
  { label: "Education", href: "/categories/education" },
  { label: "Health", href: "/categories/health" },
  { label: "Design", href: "/categories/design" },
  { label: "Technology", href: "/categories/technology" },
  { label: "Culture", href: "/categories/culture" },
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "#",
    subItems: [
      { label: "Search", href: "/search" },
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];
const Navbar = () => {
  const pathName = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = "light";
  return (
    <header className="relative bg-white font-lora text-gray-800">
      {/* top header start */}
      <div className="hidden lg:block py-3">
        <div className="blog-container flex items-center justify-between">
          {/* Logo */}
          <h1 className="shrink-0">
            <Link
              href="/"
              className="flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300"
            >
              <FaBlog />
              <span className="ml-1">Blogs</span>
            </Link>
          </h1>
          {/* Top header Right Side */}
          <div className="flex items-center space-x-3">
            <div className="">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-gray-500 hover:text-primary transition-colors cursor-pointer focus:outline-none"
              >
                <BsSearch size={18} />
              </button>
              {isSearchOpen && (
                <form
                  action="/search"
                  className="absolute top-full right-0 mt-2 p-2 bg-white rounded-md shadow-lg w-48 md:w-72 z-10 border border-gray-300"
                >
                  <input
                    type="text"
                    name="q"
                    placeholder="Search..."
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                  />
                </form>
              )}
            </div>
            <button className="p-2 rounded-full text-gray-500 hover:text-primary cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
              {theme === "light" ? (
                <IoMdMoon size={18} />
              ) : (
                <IoMdSunny size={18} />
              )}
            </button>

            {/* socials network */}
            <ul className="flex items-center space-x-3">
              <li className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline focus:ring-2 focus:ring-primary">
                <Link href="#" className="text-gray-500">
                  <FaTwitter size={12} />
                </Link>
              </li>
              <li className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline focus:ring-2 focus:ring-primary">
                <Link href="#" className="text-gray-500">
                  <FaFacebookF size={12} />
                </Link>
              </li>
              <li className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline focus:ring-2 focus:ring-primary">
                <Link href="#" className="text-gray-500">
                  <BsInstagram size={12} />
                </Link>
              </li>
            </ul>

            {/* contact button */}
            <Link
              href="/contact"
              className="px-5 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-green-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              Contact
            </Link>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-5 py-2 border border-gray-300 text-white bg-green-600 rounded-md hover:bg-green-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
