"use client"

import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a3a52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center font-bold text-[#1a3a52]">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">Delight</span>
                <span className="text-[#d4a574] font-semibold text-xs">Real Estate</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Strategic real estate advisors for business and investment solutions across multiple sectors.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#d4a574] transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d4a574] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d4a574] transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-[#d4a574] text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4a574] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-[#d4a574] text-lg">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Business Dealings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Land Transactions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Consultancy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition">
                  Market Research
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-[#d4a574] text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#d4a574] flex-shrink-0 mt-1" />
                <a href="mailto:info@delightrealestate.in" className="hover:text-[#d4a574] transition">
                  info@delightrealestate.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#d4a574] flex-shrink-0 mt-1" />
                <a href="tel:+919876543210" className="hover:text-[#d4a574] transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#d4a574] flex-shrink-0 mt-1" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Delight Real Estate. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
