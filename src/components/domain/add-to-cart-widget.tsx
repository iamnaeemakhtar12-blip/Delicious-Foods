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
  const [selectedSizeId, setSelectedSizeId] = useState<"S" | "M" | "L" | undefined>(
    product.pizzaSizes?.[0]?.id
  )
  const { addItem } = useCartStore()

  const selectedSize = product.pizzaSizes?.find((s) => s.id === selectedSizeId) || product.pizzaSizes?.[0]
  const currentPrice = selectedSize ? selectedSize.price : product.basePrice

  const handleAddToCart = () => {
    if (!currentPrice) return

    const itemName = selectedSize 
      ? `${product.name.en} (${selectedSize.label})` 
      : product.name.en;
    const cartProductId = selectedSize 
      ? `${product.id}-${selectedSize.id}` 
      : product.id;

    addItem({
      productId: cartProductId,
      name: { en: itemName },
      image: product.images?.[0],
      price: currentPrice,
      quantity: quantity
    })
    toast.success(`${quantity} x ${itemName} added to cart!`)
  }

  return (
    <div className="flex flex-col space-y-6 mt-8">
      {/* Pizza Size Selection if applicable */}
      {product.pizzaSizes && product.pizzaSizes.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider block">
            Select Size
          </label>
          <div className="flex flex-wrap gap-3">
            {product.pizzaSizes.map((sizeOpt) => {
              const isSelected = selectedSize?.id === sizeOpt.id
              return (
                <button
                  key={sizeOpt.id}
                  type="button"
                  onClick={() => setSelectedSizeId(sizeOpt.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl border-2 font-bold text-sm transition-all ${
                    isSelected
                      ? "border-[#54064F] bg-[#54064F] text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
                  }`}
                >
                  <span>{sizeOpt.label}</span>
                  <span className={`ml-3 text-xs ${isSelected ? "text-amber-300" : "text-[#54064F]"}`}>
                    Rs. {sizeOpt.price.amount.toLocaleString()}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
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
          disabled={!currentPrice}
          className="flex-1 rounded-full h-14 text-lg font-bold bg-[#54064F] hover:bg-[#741066] text-white shadow-lg shadow-[#54064F]/20"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          {currentPrice ? `Add to Cart - Rs. ${(currentPrice.amount * quantity).toLocaleString()}` : 'Price on request'}
        </Button>
      </div>
    </div>
  )
}
