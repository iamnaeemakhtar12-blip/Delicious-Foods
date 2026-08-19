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
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Fresh Ingredients</h3>
              <p className="text-gray-600">We source the freshest local ingredients daily in Wah Cantt to ensure premium quality in every bite.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh, straight to your door. We pride ourselves on the fastest delivery times across all sectors.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">100% Halal</h3>
              <p className="text-gray-600">All our meats and ingredients are certified 100% Halal, prepared in a perfectly clean environment.</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {deals.map(deal => (
              <DealCard key={deal.id} deal={deal} />
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
