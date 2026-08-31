"use client"

import * as React from "react"
import { categories } from "@/content/categories"
import { products } from "@/content/products"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { LayoutGrid, Tag, Pizza, Sandwich, Drumstick, Utensils, CupSoda, IceCream, CookingPot } from "lucide-react"

export interface CategorySidebarProps {
  activeCategoryId: string
  onSelectCategory: (categoryId: string) => void
  className?: string
}

const getCategoryIcon = (id: string, isActive: boolean) => {
  const iconClass = cn("w-4 h-4 mr-3 transition-colors", isActive ? "text-amber-300" : "text-gray-500 group-hover:text-gray-900");
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

export function CategorySidebar({ activeCategoryId, onSelectCategory, className }: CategorySidebarProps) {
  const allCategories = [{ id: "all", name: { en: "All Menu" } }, ...categories]
  const currentActive = activeCategoryId || "all"

  // Count items per category
  const getItemCount = (catId: string) => {
    if (catId === "all") return products.length;
    return products.filter(p => p.categoryIds.includes(catId)).length;
  }

  return (
    <aside className={cn("w-64 flex-shrink-0 hidden lg:block sticky top-24 self-start space-y-2", className)}>
      <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm space-y-1">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-3">
          Categories
        </h3>
        <nav className="space-y-1">
          {allCategories.map((category) => {
            const isActive = currentActive === category.id
            const count = getItemCount(category.id)

            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={cn(
                  "group relative w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 text-left",
                  isActive
                    ? "text-white bg-[#54064F] shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div className="flex items-center">
                  {getCategoryIcon(category.id, isActive)}
                  <span>{category.name.en}</span>
                </div>

                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-bold transition-colors",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
