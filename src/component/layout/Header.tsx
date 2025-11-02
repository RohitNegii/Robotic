"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [cartItems] = useState(3);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#2b2d31] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>🚚 Free shipping on orders over $200</span>
          <div className="flex items-center gap-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border border-[#d9c8a0] text-white px-2 py-1 rounded focus:outline-none focus:border-[#7e8a52]"
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="GBP">GBP £</option>
              <option value="INR">INR ₹</option>
            </select>
            <Link href="/support" className="hover:opacity-70">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#f7f5f0] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2b2d31] rounded-lg flex items-center justify-center">
                <span className="text-[#d9c8a0] text-2xl font-bold">RT</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-[#2b2d31]">RoboTech</h1>
                <p className="text-xs text-[#7a7d80]">Premium Parts</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <input
                type="text"
                placeholder="Search robotic parts..."
                className="w-full px-4 py-2.5 pr-10 rounded-lg border-2 border-[#d9c8a0] focus:outline-none focus:border-[#7e8a52]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7e8a52]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="/account"
                className="hidden md:block hover:opacity-70"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link
                href="/wishlist"
                className="hidden md:block hover:opacity-70"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link href="/cart" className="relative hover:opacity-70">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#7e8a52] text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                    {cartItems}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 mt-4">
            <Link
              href="/categories"
              className="font-medium hover:text-[#7e8a52]"
            >
              Categories
            </Link>
            <Link
              href="/solutions"
              className="font-medium hover:text-[#7e8a52]"
            >
              Solutions
            </Link>
            <Link href="/new" className="font-medium hover:text-[#7e8a52]">
              New Arrivals
            </Link>
            <Link href="/deals" className="font-medium hover:text-[#7e8a52]">
              Deals
            </Link>
            <Link
              href="/resources"
              className="font-medium hover:text-[#7e8a52]"
            >
              Resources
            </Link>
          </nav>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search..."
            className="md:hidden mt-3 w-full px-4 py-2 rounded-lg border-2 border-[#d9c8a0] focus:outline-none focus:border-[#7e8a52]"
          />
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f5f0] border-t border-[#d9c8a0] px-4 py-4">
            <nav className="space-y-3">
              <Link href="/categories" className="block py-2 font-medium">
                Categories
              </Link>
              <Link href="/solutions" className="block py-2 font-medium">
                Solutions
              </Link>
              <Link href="/new" className="block py-2 font-medium">
                New Arrivals
              </Link>
              <Link href="/deals" className="block py-2 font-medium">
                Deals
              </Link>
              <Link href="/resources" className="block py-2 font-medium">
                Resources
              </Link>
              <hr className="border-[#d9c8a0]" />
              <Link href="/account" className="block py-2">
                Account
              </Link>
              <Link href="/wishlist" className="block py-2">
                Wishlist
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
