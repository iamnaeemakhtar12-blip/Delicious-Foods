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
        "group flex flex-col sm:flex-row rounded-2xl bg-[#FFFBF0] overflow-hidden border border-[#FFE8A1] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="relative aspect-video sm:aspect-square sm:w-1/3 overflow-hidden bg-white">
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt.en}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FFE8A1]/30 text-[var(--color-brand-secondary)] font-bold font-display text-xl">
            {deal.name.en}
          </div>
        )}
        <div className="absolute top-2 left-2">
          <Badge variant="deal" className="shadow-sm">Special Deal</Badge>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-xl mb-2 text-[var(--color-brand-deep)] font-[family-name:var(--font-display)]">
          {deal.name.en}
        </h3>
        {deal.description?.en && (
          <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-1">
            {deal.description.en}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-[var(--color-surface-border)]">
          <Price price={deal.price} size="lg" />
          <Button 
            variant="secondary" 
            size="sm" 
            className="rounded-full font-bold px-6 shadow-sm"
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
            Order Now
          </Button>
        </div>
      </div>
    </div>
  )
}
