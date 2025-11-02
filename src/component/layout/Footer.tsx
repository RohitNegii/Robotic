"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-brand)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--secondary-accent)] mb-4">
              RoboTech
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for premium robotic components and automation
              solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--secondary-accent)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--buttons-highlight)] transition-colors"
              >
                F
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--secondary-accent)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--buttons-highlight)] transition-colors"
              >
                T
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--secondary-accent)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--buttons-highlight)] transition-colors"
              >
                I
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--secondary-accent)] rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--buttons-highlight)] transition-colors"
              >
                L
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[var(--secondary-accent)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold text-[var(--secondary-accent)] mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
                >
                  Tech Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[var(--secondary-accent)] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>support@robotech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon-Fri: 9AM - 6PM PST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--secondary-accent)]/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2025 RoboTech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-300 hover:text-[var(--buttons-highlight)] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
