"use client"

import * as React from "react"
import { useState } from "react"
import { CategoryNav } from "./category-nav"
import { ProductCard } from "./product-card"
import { products } from "@/content/products"
import { categories } from "@/content/categories"

import { motion, AnimatePresence } from "framer-motion"

export function MenuList() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filter products based on selected category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.categoryIds.includes(activeCategory))

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => (a.sortOrder || 999) - (b.sortOrder || 999))

  return (
    <div className="space-y-8">
      <div className="sticky top-16 md:top-20 z-40 bg-[#FAFAFA]/90 backdrop-blur-md pt-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <CategoryNav 
          activeCategoryId={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
      </div>

      <AnimatePresence mode="popLayout">
        {sortedProducts.length > 0 ? (
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-2xl border border-[var(--color-surface-border)]"
          >
            <p className="text-lg text-[var(--color-text-secondary)]">No products found in this category.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
