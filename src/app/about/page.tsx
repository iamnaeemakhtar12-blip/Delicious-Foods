import Image from "next/image"
import { ShieldCheck, Utensils, Users } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about Delicious Foods, our journey, and our commitment to serving the best fast food in Wah Cantt.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      
      {/* Hero Section for About */}
      <section className="relative py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-display text-gray-900 mb-6">
            Our <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From a small kitchen to Wah Cantt's favorite fast-food destination. We believe in serving happiness, one bite at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop" 
                alt="Our Kitchen"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col space-y-6">
              <h2 className="text-4xl font-bold font-display text-gray-900">
                Passion for <span className="text-orange-500">Flavor</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Delicious Foods was born out of a simple passion: to bring premium, mouth-watering fast food to the heart of Wah Cantt. We noticed a gap in the local market for food that is both highly accessible and undeniably premium.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every pizza we toss, every burger we grill, and every piece of chicken we roast is crafted with the utmost care, using strictly 100% Halal, fresh ingredients sourced locally.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Craft Recipes</h4>
                    <p className="text-sm text-gray-500 mt-1">Unique blends of spices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community First</h4>
                    <p className="text-sm text-gray-500 mt-1">Proudly serving Wah Cantt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
