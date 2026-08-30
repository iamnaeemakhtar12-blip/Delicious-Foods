"use client"

import * as React from "react"
import { useState } from "react"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"
import { toast } from "sonner"
import { Product } from "@/types"

export function AddToCartWidget({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    if (!product.basePrice) return

    addItem({
      productId: product.id,
      name: product.name,
      image: product.images?.[0],
      price: product.basePrice,
      quantity: quantity
    })
    toast.success(`${quantity} x ${product.name.en} added to cart!`)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {/* Quantity Selector */}
      <div className="flex items-center justify-between border border-gray-200 rounded-full bg-white px-4 py-2 sm:w-36">
        <button 
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="text-gray-500 hover:text-[var(--color-brand-primary)] p-2 transition-colors disabled:opacity-50"
          disabled={quantity <= 1}
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="font-bold text-lg w-8 text-center">{quantity}</span>
        <button 
          onClick={() => setQuantity(quantity + 1)}
          className="text-gray-500 hover:text-[var(--color-brand-primary)] p-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Add Button */}
      <Button 
        onClick={handleAddToCart}
        disabled={!product.basePrice}
        className="flex-1 rounded-full h-14 text-lg font-bold bg-[#54064F] hover:bg-[#741066] text-white shadow-lg shadow-[#54064F]/20"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        {product.basePrice ? `Add to Cart - Rs. ${(product.basePrice.amount * quantity).toLocaleString()}` : 'Unavailable'}
      </Button>
    </div>
  )
}
