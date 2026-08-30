"use client"

import * as React from "react"
import Image from "next/image"
import { Product } from "@/types"
import { cn } from "@/lib/utils"
import { Price } from "@/components/ui/price"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useCartStore } from "@/store/cart"

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  const primaryImage = product.images?.[0]
  const { addItem } = useCartStore()
  
  return (
    <div 
      className={cn(
        "group flex flex-col rounded-xl sm:rounded-2xl bg-white overflow-hidden border border-[var(--color-surface-border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full",
        className
      )}
      {...props}
    >
      <div className="relative aspect-square sm:aspect-video w-full overflow-hidden bg-gray-100">
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
        <h3 className="font-bold text-xs sm:text-lg mb-0.5 sm:mb-1 text-[var(--color-text-primary)] line-clamp-1 sm:line-clamp-2 leading-tight">
          {product.name.en}
        </h3>
        {product.description?.en && (
          <p className="text-[10px] sm:text-sm text-[var(--color-text-secondary)] line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-4 hidden sm:block">
            {product.description.en}
          </p>
        )}
        
        <div className="mt-auto pt-1 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
          {product.basePrice ? (
            <Price price={product.basePrice} size="sm" className="text-xs sm:text-base font-bold" />
          ) : (
            <span className="text-[10px] sm:text-sm font-medium text-gray-500">Contact</span>
          )}
          
          <Button 
            size="sm" 
            className="rounded-full font-bold px-2 sm:px-5 text-[10px] sm:text-sm h-6 sm:h-9 w-full sm:w-auto"
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
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
