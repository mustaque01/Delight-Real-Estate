"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="bg-[#0f2438] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#d4a574] transition">
              <Phone size={16} />
              +91 98765 43210
            </a>
            <a
              href="mailto:info@delightrealestate.in"
              className="flex items-center gap-2 hover:text-[#d4a574] transition"
            >
              <Mail size={16} />
              info@delightrealestate.in
            </a>
          </div>
          <div className="text-gray-400">Available 24/7 for Your Inquiries</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#1a3a52] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#d4a574] rounded-lg flex items-center justify-center font-bold text-[#1a3a52] text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">Delight</span>
                <span className="text-[#d4a574] font-semibold text-xs">Real Estate</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1 items-center">
              <Link
                href="#"
                className="text-white hover:text-[#d4a574] transition px-3 py-2 rounded text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-[#d4a574] transition px-3 py-2 rounded text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="#policies"
                className="text-white hover:text-[#d4a574] transition px-3 py-2 rounded text-sm font-medium"
              >
                Policies
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d4a574] transition px-3 py-2 rounded text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex gap-3 items-center">
              <button className="bg-[#d4a574] text-[#1a3a52] px-5 py-2 rounded font-semibold hover:bg-[#c9945f] transition text-sm">
                View Listing
              </button>
              <Link href="/signup">
                <button className="border border-[#d4a574] text-[#d4a574] px-4 py-2 rounded hover:bg-[#d4a574] hover:text-[#1a3a52] transition font-semibold text-sm">
                  Sign Up
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded hover:bg-[#c9945f] transition font-semibold text-sm">
                  Login
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2 border-t border-[#0f2438]">
              <Link href="#" className="block text-white hover:text-[#d4a574] py-2 px-2">
                Home
              </Link>
              <Link href="#services" className="block text-white hover:text-[#d4a574] py-2 px-2">
                Services
              </Link>
              <Link href="#policies" className="block text-white hover:text-[#d4a574] py-2 px-2">
                Policies
              </Link>
              <Link href="#" className="block text-white hover:text-[#d4a574] py-2 px-2">
                Contact
              </Link>
              <button className="w-full bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded mt-2 font-semibold">
                View Listing
              </button>
              <Link href="/signup">
                <button className="w-full border border-[#d4a574] text-[#d4a574] px-4 py-2 rounded font-semibold">
                  Sign Up
                </button>
              </Link>
              <Link href="/login">
                <button className="w-full bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded font-semibold">Login</button>
              </Link>
            </nav>
          )}
        </div>
      </nav>
    </header>
  )
}
