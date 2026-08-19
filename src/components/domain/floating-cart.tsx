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
          className="relative h-16 rounded-full px-6 shadow-2xl bg-[var(--color-brand-primary)] text-white hover:scale-105 hover:bg-[var(--color-brand-primary)] transition-transform duration-300"
        >
          <ShoppingCart className="w-6 h-6 mr-2" />
          <span className="font-bold text-lg">View Cart</span>
          
          <AnimatePresence mode="popLayout">
            {count > 0 && (
              <motion.span 
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--color-brand-secondary)] text-[var(--color-text-on-yellow)] rounded-full flex items-center justify-center text-sm font-bold shadow-md"
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
