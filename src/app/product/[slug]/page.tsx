import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { getProductBySlug, products } from "@/content/products"
import { AddToCartWidget } from "@/components/domain/add-to-cart-widget"
import { ProductCard } from "@/components/domain/product-card"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const primaryImage = product.images?.[0]
  
  // Get 3-4 related products from the same category
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.categoryIds.some(c => product.categoryIds.includes(c)))
    .slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-white">
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link 
          href="/menu" 
          className="inline-flex items-center text-gray-500 hover:text-[var(--color-brand-primary)] font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Menu
        </Link>
      </div>

      {/* Product Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Image Gallery */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            {primaryImage ? (
              <Image 
                src={primaryImage.src} 
                alt={primaryImage.alt.en} 
                fill 
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
            {/* Badges floating on image */}
            {product.featured && (
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md">
                Chef's Special
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center space-x-2">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.categoryIds[0].replace('-', ' ')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gray-900 leading-tight mb-4">
              {product.name.en}
            </h1>
            
            <div className="text-2xl sm:text-3xl font-bold text-[#54064F] mb-6">
              Rs. {product.basePrice?.amount.toLocaleString()}
            </div>

            {/* Description placeholder since we don't have descriptions in DB yet */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Experience the authentic taste of Wah Cantt with our freshly prepared {product.name.en}. 
              Made with premium ingredients and our signature blend of spices to ensure every bite is delicious.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Freshly Prepared
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                100% Halal
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Premium Quality
              </div>
              <div className="flex items-center text-sm sm:text-base text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                Fast Delivery
              </div>
            </div>

            <hr className="border-gray-100 mb-8" />

            {/* Client Component for stateful actions */}
            <AddToCartWidget product={product} />
          </div>

        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="bg-[#FAFAFA] py-16 sm:py-24 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 mb-8 text-center sm:text-left">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="h-full">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
