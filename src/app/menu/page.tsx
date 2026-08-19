import { MenuList } from "@/components/domain/menu-list"

export const metadata = {
  title: "Full Menu - Delicious Foods Wah Cantt",
  description: "Explore our full menu of delicious fast food, including Zinger burgers, pizzas, loaded fries, and family deals in Wah Cantt.",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-display)] mb-4">
            Explore Our <span className="text-[var(--color-brand-primary)]">Menu</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg">
            From our legendary Zinger burgers to freshly baked pizzas and satisfying platters, we've got something to crush every craving.
          </p>
        </div>

        {/* The reusable interactive menu list */}
        <MenuList />

      </div>
    </div>
  )
}
