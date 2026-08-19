"use client"

import * as React from "react"
import { categories } from "@/content/categories"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface CategoryNavProps extends React.HTMLAttributes<HTMLDivElement> {
  activeCategoryId?: string
  onSelectCategory?: (categoryId: string) => void
}

export function CategoryNav({ activeCategoryId, onSelectCategory, className, ...props }: CategoryNavProps) {
  const allCategories = [{ id: "all", name: { en: "All Menu" } }, ...categories]
  const currentActive = activeCategoryId || "all"

  return (
    <div className={cn("w-full overflow-x-auto no-scrollbar py-4", className)} {...props}>
      <ul className="flex flex-nowrap md:flex-wrap items-center gap-3 px-4 md:px-0">
        {allCategories.map((category) => {
          const isActive = currentActive === category.id
          
          return (
            <li key={category.id} className="relative">
              <button
                onClick={() => onSelectCategory?.(category.id)}
                className={cn(
                  "relative z-10 whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors border",
                  isActive
                    ? "text-white border-transparent"
                    : "bg-white/80 text-[var(--color-text-secondary)] border-[var(--color-surface-border)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-brand-primary)]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[var(--color-brand-primary)] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {category.name.en}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
