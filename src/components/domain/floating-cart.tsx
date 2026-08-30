"use client"

import * as React from "react"
import { ShoppingCart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"

export function FloatingCart() {
  const { totalItems, toggleCart } = useCartStore()
  
  // Need to hydration-safe render the totalItems
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null;
  
  const count = totalItems();

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <Button 
          size="lg" 
          onClick={toggleCart}
          className="relative h-12 sm:h-16 rounded-full px-5 sm:px-6 shadow-2xl bg-[#54064F] text-white hover:scale-105 hover:bg-[#741066] transition-transform duration-300 border-2 border-white shadow-[0_4px_20px_rgba(84,6,79,0.3)]"
        >
          <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className="font-bold text-sm sm:text-lg">View Cart</span>
          
          <AnimatePresence mode="popLayout">
            {count > 0 && (
              <motion.span 
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-white text-gray-900 border border-gray-200 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}
