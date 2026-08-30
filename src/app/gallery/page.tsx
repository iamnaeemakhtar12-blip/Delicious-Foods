import Image from "next/image"

export const metadata = {
  title: "Gallery",
  description: "Feast your eyes on the delicious fast food creations at Delicious Foods Wah Cantt.",
}

const galleryImages = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop", // Pizza
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&auto=format&fit=crop", // Burger
  "https://images.unsplash.com/photo-1569058242253-11f8b4ed70d8?w=800&q=80&auto=format&fit=crop", // Broast
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&auto=format&fit=crop", // Pizza slice
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop", // Zinger
  "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80&auto=format&fit=crop", // Pulao
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80&auto=format&fit=crop", // Shawarma
  "https://images.unsplash.com/photo-1573081467611-82cd2e431f13?w=800&q=80&auto=format&fit=crop", // Fries
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80&auto=format&fit=crop", // Drink
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual feast of our finest creations. Warning: Looking at these images may cause extreme hunger.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square sm:aspect-auto rounded-xl sm:rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] sm:text-lg tracking-wider uppercase border border-white px-2 sm:px-6 py-0.5 sm:py-2 rounded-full">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
