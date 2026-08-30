import { SectionHeading } from "@/components/ui/section-heading";
import { MenuList } from "@/components/domain/menu-list";
import { DealCard } from "@/components/domain/deal-card";
import { HeroSection } from "@/components/domain/hero-section";
import { deals } from "@/content/deals";
import Image from "next/image";
import { restaurant } from "@/content/restaurant";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Leaf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Trust Badges */}
      <section className="py-6 sm:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center">
            <div className="flex flex-col items-center justify-center p-2 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-1.5 sm:mb-4">
                <Leaf className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-bold text-xs sm:text-xl mb-1 sm:mb-2 text-gray-900 leading-tight">Fresh Ingredients</h3>
              <p className="hidden sm:block text-gray-600 text-sm">We source the freshest local ingredients daily in Wah Cantt to ensure premium quality in every bite.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-1.5 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-bold text-xs sm:text-xl mb-1 sm:mb-2 text-gray-900 leading-tight">Fast Delivery</h3>
              <p className="hidden sm:block text-gray-600 text-sm">Hot and fresh, straight to your door. We pride ourselves on the fastest delivery times across all sectors.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-1.5 sm:mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-bold text-xs sm:text-xl mb-1 sm:mb-2 text-gray-900 leading-tight">100% Halal</h3>
              <p className="hidden sm:block text-gray-600 text-sm">All our meats and ingredients are certified 100% Halal, prepared in a perfectly clean environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Enjoy our special discounted deals and combo meals perfect for sharing.">
            Exclusive Deals
          </SectionHeading>
          
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-6 mt-8 sm:mt-12">
            {deals.map((deal, index) => (
              <DealCard key={deal.id} deal={deal} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading subtitle="Explore our wide variety of fast food and traditional dishes." className="mb-0 text-left">
              Popular Menu
            </SectionHeading>
            <Button asChild variant="outline" className="mt-6 md:mt-0 rounded-full font-bold border-orange-500 text-orange-600 hover:bg-orange-50">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
          
          <div className="mt-8">
            <MenuList />
          </div>
        </div>
      </section>
    </div>
  );
}
