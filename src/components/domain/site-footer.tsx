"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { restaurant } from "@/content/restaurant"
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react"

// Clean SVG icons for Facebook, Instagram, and TikTok
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.67.84-5.35 2.85-7.07 1.34-1.15 3.07-1.8 4.85-1.84.05 1.47.01 2.94.02 4.41-.83.02-1.68.27-2.39.72-.94.59-1.57 1.6-1.66 2.7-.12 1.4.52 2.82 1.65 3.61 1.05.74 2.45.9 3.65.41 1.13-.45 1.95-1.52 2.1-2.73.08-2.91.03-5.83.04-8.74.01-4.48-.01-8.96.01-13.44z" />
    </svg>
  )
}

export function SiteFooter() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  // Minimal footer for checkout page only
  if (pathname === "/checkout") {
    return (
      <footer className="bg-[var(--color-brand-deep)] text-white/80 py-6 border-t border-white/10">
        <div className="container mx-auto px-4 text-center space-y-2 text-xs sm:text-sm">
          <p>&copy; {currentYear} Delicious Foods Wah Cantt. All rights reserved.</p>
          <p className="text-white/70 flex items-center justify-center gap-2">
            <span>Need help with your order? Call support:</span>
            <a href={`tel:${restaurant.phone.e164}`} className="text-amber-300 font-bold hover:underline">
              {restaurant.phone.display}
            </a>
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-[var(--color-brand-deep)] text-white/90 pt-10 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Tagline & Social Icons Header Banner on Mobile */}
        <div className="mb-8 md:hidden text-center space-y-3 pb-6 border-b border-white/10">
          <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
            {restaurant.description?.en || "Whatever you're craving, we've got it."} Proudly serving the best fast food in Wah Cantt.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <a 
              href="https://facebook.com/DeliciousFoods" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/DeliciousFoods" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com/@DeliciousFoods" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2-Column Mobile Grid (<768px) / 4-Column Desktop Grid (>=768px) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Column 1 (Desktop only): Tagline & Social Links */}
          <div className="hidden md:block space-y-4">
            <h4 className="font-extrabold text-sm sm:text-base text-amber-300 uppercase tracking-wider">
              Delicious Foods
            </h4>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs">
              {restaurant.description?.en || "Whatever you're craving, we've got it."} Proudly serving the best fast food in Wah Cantt.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href="https://facebook.com/DeliciousFoods" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/DeliciousFoods" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com/@DeliciousFoods" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full bg-white/10 text-amber-300 hover:bg-amber-400 hover:text-gray-950 transition-all duration-200"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs sm:text-base text-amber-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
              <li><a href="/" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-amber-300 transition-colors">Menu</a></li>
              <li><a href="/deals" className="hover:text-amber-300 transition-colors">Deals & Offers</a></li>
              <li><a href="/about" className="hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="/gallery" className="hover:text-amber-300 transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-amber-300 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us + Opening Hours Column on Mobile (Separated on Desktop) */}
          <div className="space-y-6 md:space-y-0 md:contents">
            
            {/* Contact Us Block */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-xs sm:text-base text-amber-300 uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-amber-300 flex-shrink-0" />
                  <div>
                    <a href={`tel:${restaurant.phone.e164}`} className="hover:text-amber-300 transition-colors font-medium">
                      {restaurant.phone.display}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-amber-300 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Delicious+Foods+Lalarukh+Wah+Cantt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group font-medium"
                      title="Open Google Maps directions"
                    >
                      <span>Lalarukh, Wah Cantt,<br />Punjab, Pakistan</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity ml-0.5" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Opening Hours Block */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-xs sm:text-base text-amber-300 uppercase tracking-wider">
                Opening Hours
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-amber-300 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">Monday - Sunday</p>
                    <p className="text-white/70 text-xs">11:00 AM - 1:00 AM</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
        
        {/* Bottom Copyright Line */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-2">
          <p>&copy; {currentYear} {restaurant.legalOrDisplayName}. All rights reserved.</p>
          <p>Made with ❤️ for Wah Cantt</p>
        </div>
      </div>
    </footer>
  )
}
