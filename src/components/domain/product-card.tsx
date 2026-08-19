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
        "group flex flex-col rounded-2xl bg-white overflow-hidden border border-[var(--color-surface-border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt.en}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
            No Image
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-bold text-lg mb-1 text-[var(--color-text-primary)]">
          {product.name.en}
        </h3>
        {product.description?.en && (
          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-4">
            {product.description.en}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          {product.basePrice ? (
            <Price price={product.basePrice} size="lg" />
          ) : (
            <span className="text-sm font-medium text-gray-500">Price on selection</span>
          )}
          
          <Button 
            size="sm" 
            className="rounded-full font-bold px-5"
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
