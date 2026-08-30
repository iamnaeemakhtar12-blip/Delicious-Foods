"use client"

import * as React from "react"
import { categories } from "@/content/categories"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { LayoutGrid, Tag, Pizza, Sandwich, Drumstick, Utensils, CupSoda, IceCream } from "lucide-react"

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
    default: return <Utensils className={iconClass} />
  }
}

export function CategoryNav({ activeCategoryId, onSelectCategory, className, ...props }: CategoryNavProps) {
  const allCategories = [{ id: "all", name: { en: "All Menu" } }, ...categories]
  const currentActive = activeCategoryId || "all"

  return (
    <div className={cn("w-full overflow-x-auto no-scrollbar py-2", className)} {...props}>
      <ul className="flex flex-nowrap items-center gap-3 px-4 md:px-0">
        {allCategories.map((category) => {
          const isActive = currentActive === category.id
          
          return (
            <li key={category.id} className="relative">
              <button
                onClick={() => onSelectCategory?.(category.id)}
                className={cn(
                  "relative z-10 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold transition-all shadow-sm flex items-center text-xs sm:text-sm",
                  isActive
                    ? "text-white border-transparent"
                    : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-100"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[#54064F] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
  )
}
