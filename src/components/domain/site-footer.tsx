import * as React from "react"
import { restaurant } from "@/content/restaurant"
import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-brand-deep)] text-white/90 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="Delicious Foods Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 rounded-full object-cover bg-white"
              />
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Delicious Foods
              </h3>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              {restaurant.description?.en} Proudly serving the best fast food in Wah Cantt.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="/deals" className="hover:text-white transition-colors">Deals & Offers</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-[var(--color-brand-secondary)]" />
                <div>
                  <a href={`tel:${restaurant.phone.e164}`} className="hover:text-[var(--color-brand-secondary)] transition-colors">
                    {restaurant.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-[var(--color-brand-secondary)]" />
                <address className="not-italic text-sm">
                  Lalarukh, Wah Cantt,<br />
                  Punjab, Pakistan
                </address>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-5 w-5 mt-0.5 text-[var(--color-brand-secondary)]" />
                <div>
                  <p>Monday - Sunday</p>
                  <p className="text-white/70">11:00 AM - 1:00 AM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>&copy; {currentYear} {restaurant.legalOrDisplayName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ for Wah Cantt</p>
        </div>
      </div>
    </footer>
  )
}
