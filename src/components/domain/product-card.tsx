"use client"

import * as React from "react"
import Image from "next/image"
import { Product } from "@/types"
import { cn } from "@/lib/utils"
import { Price } from "@/components/ui/price"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useCartStore } from "@/store/cart"
import { Heart } from "lucide-react"

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  const primaryImage = product.images?.[0]
  const { addItem } = useCartStore()
  
  return (
    <div 
      className={cn(
        "group flex flex-col rounded-2xl sm:rounded-3xl bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full",
        className
      )}
      {...props}
    >
      <div className="relative aspect-square sm:aspect-video w-full overflow-hidden bg-gray-100">
        <div className="absolute top-2 right-2 z-10">
          <button className="bg-[#54064F] text-white p-1.5 sm:p-2 rounded-full shadow-sm hover:bg-[#741066] transition-colors">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt.en}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 33vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-xs sm:text-base">
            No Image
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-2 sm:p-4">
        <h3 className="font-bold text-[11px] sm:text-lg mb-1 sm:mb-2 text-gray-900 line-clamp-2 leading-tight">
          {product.name.en}
        </h3>
        
        <div className="mt-1 sm:mt-2 mb-2 sm:mb-4">
          {product.basePrice ? (
            <Price price={product.basePrice} size="sm" className="text-[13px] sm:text-base font-bold text-[#54064F]" />
          ) : (
            <span className="text-[10px] sm:text-sm font-medium text-gray-500">Contact</span>
          )}
        </div>
        
        <div className="mt-auto">
          <Button 
            size="sm" 
            className="rounded-full font-bold px-2 sm:px-5 text-[10px] sm:text-sm h-7 sm:h-10 w-full bg-[#54064F] hover:bg-[#741066] text-white"
            onClick={() => {
              if (product.basePrice) {
                addItem({
                  productId: product.id,
                  name: product.name,
                  image: product.images?.[0],
                  price: product.basePrice,
                  quantity: 1
                });
                toast.success(`${product.name.en} added to cart!`);
              }
            }}
          >
            + Add
          </Button>
        </div>
      </div>
    </div>
  )
}
