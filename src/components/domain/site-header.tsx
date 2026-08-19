"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { restaurant } from "@/content/restaurant"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Deals", href: "/deals" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-surface-border)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Delicious Foods Logo" 
                width={50} 
                height={50} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-bold font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--color-brand-primary)]">
                Delicious Foods
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "text-sm font-bold transition-colors",
                    isActive 
                      ? "text-[var(--color-brand-primary)]" 
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${restaurant.phone.e164}`} className="hidden sm:inline-flex">
              <Button variant="secondary" className="font-bold rounded-full gap-2">
                <Phone className="h-4 w-4" />
                {restaurant.phone.display}
              </Button>
            </a>
            <a href={`tel:${restaurant.phone.e164}`} className="sm:hidden lg:hidden">
              <Button size="icon" variant="secondary" className="rounded-full">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-surface-border)] bg-white">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
              
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-6 py-3 text-base font-bold transition-colors",
                    isActive 
                      ? "bg-[var(--color-surface-subtle)] text-[var(--color-brand-primary)] border-l-4 border-[var(--color-brand-primary)]" 
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-brand-primary)] border-l-4 border-transparent"
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
