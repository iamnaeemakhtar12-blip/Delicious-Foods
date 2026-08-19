import * as React from "react"
import { cn } from "@/lib/utils"
import { Money } from "@/types"

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  price: Money
  compareAtPrice?: Money
  size?: "sm" | "md" | "lg"
}

export function Price({ price, compareAtPrice, size = "md", className, ...props }: PriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price.amount)

  const formattedComparePrice = compareAtPrice
    ? new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: compareAtPrice.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(compareAtPrice.amount)
    : null

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg font-bold",
  }

  return (
    <div className={cn("flex items-baseline gap-2", className)} {...props}>
      <span className={cn("font-medium text-[var(--color-price)] font-mono", sizeClasses[size])}>
        {formattedPrice}
      </span>
      {formattedComparePrice && (
        <span className="text-sm text-gray-400 line-through font-mono">
          {formattedComparePrice}
        </span>
      )}
    </div>
  )
}
