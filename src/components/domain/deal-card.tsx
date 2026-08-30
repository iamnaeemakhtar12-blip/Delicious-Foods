"use client"

import * as React from "react"
import Image from "next/image"
import { Deal } from "@/types"
import { cn } from "@/lib/utils"
import { Price } from "@/components/ui/price"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { useCartStore } from "@/store/cart"

export interface DealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  deal: Deal
}

export function DealCard({ deal, className, ...props }: DealCardProps) {
  const primaryImage = deal.image
  const { addItem } = useCartStore()
  
  return (
    <div 
      className={cn(
        "group flex flex-col rounded-xl sm:rounded-2xl bg-[#FFFBF0] overflow-hidden border border-[#FFE8A1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full",
        className
      )}
      {...props}
    >
      <div className="relative aspect-square w-full sm:aspect-square overflow-hidden bg-white">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt.en}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 33vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FFE8A1]/30 text-[var(--color-brand-secondary)] font-bold font-display text-xs sm:text-xl">
            {deal.name.en}
          </div>
        )}
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
          <Badge variant="deal" className="shadow-sm text-[8px] sm:text-xs px-1 sm:px-2.5 py-0 sm:py-0.5">Deal</Badge>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-2 sm:p-5">
        <h3 className="font-bold text-xs sm:text-xl mb-1 sm:mb-2 text-[var(--color-brand-deep)] font-[family-name:var(--font-display)] line-clamp-1 leading-tight">
          {deal.name.en}
        </h3>
        {deal.description?.en && (
          <p className="text-[10px] sm:text-sm text-[var(--color-text-secondary)] mb-2 sm:mb-4 hidden sm:block flex-1">
            {deal.description.en}
          </p>
        )}
        
        <div className="mt-auto pt-1 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-t border-[var(--color-surface-border)]">
          <Price price={deal.price} size="sm" className="text-xs sm:text-lg font-bold" />
          <Button 
            variant="secondary" 
            size="sm" 
            className="rounded-full font-bold px-2 sm:px-6 text-[10px] sm:text-sm h-6 sm:h-9 w-full sm:w-auto shadow-sm"
            onClick={() => {
              addItem({
                productId: deal.id,
                name: deal.name,
                image: deal.image,
                price: deal.price,
                quantity: 1
              });
              toast.success(`${deal.name.en} added to order!`);
            }}
          >
            Order
          </Button>
        </div>
      </div>
    </div>
  )
}
