"use client"

import * as React from "react"
import { categories } from "@/content/categories"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { LayoutGrid, Tag, Pizza, Sandwich, Drumstick, Utensils, CupSoda, IceCream, CookingPot } from "lucide-react"

export interface CategoryNavProps extends React.HTMLAttributes<HTMLDivElement> {
  activeCategoryId?: string
  onSelectCategory?: (categoryId: string) => void
}

const getCategoryIcon = (id: string, isActive: boolean) => {
  const iconClass = cn("w-4 h-4 mr-2", isActive ? "text-white" : "text-gray-700");
  switch (id) {
    case "all": return <LayoutGrid className={iconClass} />
    case "deals": return <Tag className={iconClass} />
    case "pizza": return <Pizza className={iconClass} />
    case "burgers": return <Sandwich className={iconClass} />
    case "chicken": return <Drumstick className={iconClass} />
    case "drinks": return <CupSoda className={iconClass} />
    case "desserts": return <IceCream className={iconClass} />
    case "deig": return <CookingPot className={iconClass} />
    default: return <Utensils className={iconClass} />
  }
}

export function CategoryNav({ activeCategoryId, onSelectCategory, className, ...props }: CategoryNavProps) {
  const allCategories = [{ id: "all", name: { en: "All Menu" } }, ...categories]
  const currentActive = activeCategoryId || "all"

  return (
    <div className={cn("relative w-full group", className)} {...props}>
      {/* Right gradient scroll affordance mask */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-20" />
      {/* Left gradient scroll affordance mask */}
      <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-20" />

      <div className="w-full overflow-x-auto no-scrollbar py-2 px-2 sm:px-0">
        <ul className="flex flex-nowrap items-center gap-2 sm:gap-3 px-2 sm:px-4 md:px-0">
          {allCategories.map((category) => {
            const isActive = currentActive === category.id
            
            return (
              <li key={category.id} className="relative flex-shrink-0">
                <button
                  onClick={() => onSelectCategory?.(category.id)}
                  className={cn(
                    "relative z-10 whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-2.5 rounded-full font-bold transition-all shadow-xs flex items-center text-xs sm:text-sm min-h-[40px] sm:min-h-[44px]",
                    isActive
                      ? "text-white border-transparent"
                      : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200/80 hover:border-gray-300"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-[#54064F] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  {getCategoryIcon(category.id, isActive)}
                  {category.name.en}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
