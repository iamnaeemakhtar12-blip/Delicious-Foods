import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/content/blog"
import { Calendar, User } from "lucide-react"

export const metadata = {
  title: "Blog",
  description: "Read the latest news, recipes, and stories from Delicious Foods Wah Cantt.",
}

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            Our <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories from our kitchen, local food guides, and behind-the-scenes looks at how we make Wah Cantt's best fast food.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-xl sm:rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative aspect-square sm:aspect-video overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-1 left-1 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-xs font-bold text-orange-600">
                    {post.tags[0]}
                  </div>
                </div>
                
                <div className="p-2 sm:p-6 flex flex-col flex-1">
                  <div className="hidden sm:flex items-center space-x-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {new Date(post.date).toLocaleDateString()}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1"/> {post.author}</span>
                  </div>
                  
                  <h3 className="text-xs sm:text-xl font-bold font-display text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="hidden sm:block text-gray-600 line-clamp-3 mb-6 flex-1 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center font-bold text-[10px] sm:text-sm text-orange-500">
                    Read <span className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
