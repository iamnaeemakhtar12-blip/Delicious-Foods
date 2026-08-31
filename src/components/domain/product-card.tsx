"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { cn } from "@/lib/utils"
import { Price } from "@/components/ui/price"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useCartStore } from "@/store/cart"
import { Heart, Sparkles } from "lucide-react"

export interface ProductCardProps {
  product: Product
  priority?: boolean
  className?: string
}

export function ProductCard({ product, priority = false, className }: ProductCardProps) {
  const primaryImage = product.images?.[0]
  const { addItem } = useCartStore()

  const [selectedSizeId, setSelectedSizeId] = React.useState<"S" | "M" | "L" | undefined>(
    product.pizzaSizes?.[0]?.id
  )

  const selectedSize = product.pizzaSizes?.find((s) => s.id === selectedSizeId) || product.pizzaSizes?.[0]
  const currentPrice = selectedSize ? selectedSize.price : product.basePrice

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl sm:rounded-3xl bg-white overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full",
        className
      )}
    >
      <div className="relative aspect-square sm:aspect-video w-full overflow-hidden bg-gray-100">
        {/* Popular Badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-amber-400/95 backdrop-blur-xs text-gray-950 font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 tracking-tight">
              <Sparkles className="w-3 h-3 text-amber-950" />
              Popular
            </span>
          </div>
        )}

        <div className="absolute top-2 right-2 z-10">
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="bg-[#54064F] text-white p-1.5 sm:p-2 rounded-full shadow-sm hover:bg-[#741066] transition-colors"
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt.en}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={priority}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-xs sm:text-base">
            No Image
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <h3 className="font-bold text-xs sm:text-lg mb-1 text-gray-900 line-clamp-2 leading-tight">
          {product.name.en}
        </h3>

        {/* Pizza Size Selector */}
        {product.pizzaSizes && product.pizzaSizes.length > 0 && (
          <div className="flex items-center gap-1 my-1.5" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            {product.pizzaSizes.map((sizeOpt) => (
              <button
                key={sizeOpt.id}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSizeId(sizeOpt.id);
                }}
                className={cn(
                  "px-2.5 py-1 text-[11px] sm:text-xs rounded-md font-bold transition-colors border",
                  selectedSize?.id === sizeOpt.id
                    ? "bg-[#54064F] text-white border-[#54064F]"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                )}
                title={sizeOpt.label}
              >
                {sizeOpt.id}
              </button>
            ))}
          </div>
        )}
        
        <div className="mt-1 mb-2 sm:mb-3">
          {currentPrice ? (
            <Price price={currentPrice} size="sm" className="text-sm sm:text-base font-bold text-[#54064F]" />
          ) : (
            <span className="text-xs sm:text-sm font-medium text-gray-500">Price on request</span>
          )}
        </div>
        
        <div className="mt-auto pt-1">
          <Button 
            size="sm" 
            className="rounded-full font-bold px-3 sm:px-5 text-xs sm:text-sm h-11 sm:h-10 w-full bg-[#54064F] hover:bg-[#741066] text-white group-hover:bg-[#741066] transition-colors shadow-xs"
            disabled={!currentPrice}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (currentPrice) {
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
                  quantity: 1
                });
                toast.success(`${itemName} added to cart!`);
              }
            }}
          >
            + Add
          </Button>
        </div>
      </div>
    </Link>
  )
}
