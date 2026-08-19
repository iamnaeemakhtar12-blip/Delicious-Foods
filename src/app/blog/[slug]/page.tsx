import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/content/blog"
import { Calendar, User, ArrowLeft } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        
        <Link href="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <div className="flex items-center space-x-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="font-bold text-gray-900">{post.author}</p>
              <p>Author</p>
            </div>
          </div>
          <div className="flex items-center border-l border-gray-200 pl-6">
            <div>
              <p className="font-bold text-gray-900">{new Date(post.date).toLocaleDateString()}</p>
              <p className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> Published</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg prose-orange max-w-none text-gray-700 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6">{paragraph}</p>
          ))}
        </div>

      </article>
    </div>
  )
}
