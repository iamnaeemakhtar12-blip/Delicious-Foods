"use client"

import * as React from "react"
import { ShoppingCart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"

import { usePathname } from "next/navigation"

export function FloatingCart() {
  const pathname = usePathname()
  const { totalItems, totalPrice, toggleCart } = useCartStore()
  
  // Need to hydration-safe render the totalItems
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null;
  if (pathname?.startsWith("/checkout")) return null;
  
  const count = totalItems();
  const price = totalPrice();

  return (
    <AnimatePresence>
      {count > 0 && (
        <>
          {/* Mobile Bottom Sticky Cart Bar (< 768px) */}
          <motion.div 
            className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#54064F] text-white shadow-[0_-4px_25px_rgba(0,0,0,0.2)] border-t border-white/10 md:hidden flex items-center justify-between"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="flex flex-col">
              <span className="text-xs text-white/80 font-medium">
                {count} {count === 1 ? 'item' : 'items'} in order
              </span>
              <span className="text-lg font-bold text-amber-300">
                Rs. {price.toLocaleString()}
              </span>
            </div>

            <Button 
              size="sm" 
              onClick={toggleCart}
              className="rounded-full bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-5 h-11 text-sm shadow-md flex items-center"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Cart
            </Button>
          </motion.div>

          {/* Desktop Floating Cart Button (>= 768px) */}
          <motion.div 
            className="hidden md:block fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={toggleCart}
              className="relative h-16 rounded-full px-6 shadow-2xl bg-[#54064F] text-white hover:scale-105 hover:bg-[#741066] transition-transform duration-300 border-2 border-white shadow-[0_4px_20px_rgba(84,6,79,0.3)]"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              <span className="font-bold text-lg">View Cart (Rs. {price.toLocaleString()})</span>
              
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-amber-400 text-gray-950 border border-white rounded-full flex items-center justify-center text-xs font-bold shadow-md"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
