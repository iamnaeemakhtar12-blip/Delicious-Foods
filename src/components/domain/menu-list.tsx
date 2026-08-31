"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import { CategoryNav } from "./category-nav"
import { CategorySidebar } from "./category-sidebar"
import { ProductCard } from "./product-card"
import { products } from "@/content/products"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, UtensilsCrossed } from "lucide-react"

export function MenuList() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter products based on search query AND active category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = searchQuery.trim() === "" || 
        product.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description?.en && product.description.en.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === "all" || product.categoryIds.includes(activeCategory);

      // If user types in search, search across all items unless category is specific
      if (searchQuery.trim() !== "") {
        return matchesSearch;
      }

      return matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  // Sort products by sortOrder
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => (a.sortOrder || 999) - (b.sortOrder || 999));
  }, [filteredProducts]);

  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="relative max-w-xl mx-auto md:mx-0">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search burgers, pizzas, pulao, drinks..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-xs text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#54064F] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              title="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="mt-2 text-xs text-gray-500 flex items-center justify-between px-1">
            <span>Found {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'} for "{searchQuery}"</span>
            <button 
              onClick={() => setSearchQuery("")}
              className="text-[#54064F] font-bold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Mobile Sticky Horizontal Category Pills (Hidden on Desktop) */}
      <div className="lg:hidden sticky top-16 z-30 bg-[#FAFAFA]/95 backdrop-blur-md pt-2 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <CategoryNav 
          activeCategoryId={activeCategory} 
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            setSearchQuery("");
          }} 
        />
      </div>

      {/* Desktop Main Layout with Sticky Sidebar + Multi-Column Grid */}
      <div className="flex gap-8 items-start">
        {/* Desktop Sticky Sidebar */}
        <CategorySidebar 
          activeCategoryId={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            setSearchQuery("");
          }}
        />

        {/* Product Grid Area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="popLayout">
            {sortedProducts.length > 0 ? (
              <motion.div 
                key={`${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6"
              >
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.02, 0.3) }}
                    className="h-full"
                  >
                    <ProductCard product={product} priority={index < 6} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-100 shadow-xs max-w-md mx-auto my-8"
              >
                <div className="w-16 h-16 bg-purple-50 text-[#54064F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No items found</h3>
                <p className="text-sm text-gray-500 mb-6">
                  {searchQuery 
                    ? `We couldn't find any dishes matching "${searchQuery}".`
                    : "No products available in this category."}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-6 py-2.5 bg-[#54064F] hover:bg-[#741066] text-white text-sm font-bold rounded-full transition-colors shadow-sm"
                >
                  View All Menu
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
