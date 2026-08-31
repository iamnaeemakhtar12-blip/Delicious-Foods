export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Page Header Skeleton */}
        <div className="text-center mb-8 max-w-2xl mx-auto space-y-3">
          <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-2xl mx-auto" />
          <div className="h-5 w-96 bg-gray-200 animate-pulse rounded-lg mx-auto" />
        </div>

        <div className="space-y-6">
          {/* Search Bar Skeleton */}
          <div className="h-12 max-w-xl mx-auto md:mx-0 bg-gray-200 animate-pulse rounded-2xl" />

          {/* Mobile Category Nav Skeleton */}
          <div className="lg:hidden flex space-x-3 overflow-x-auto py-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-10 w-28 bg-gray-200 animate-pulse rounded-full flex-shrink-0" />
            ))}
          </div>

          {/* Desktop Layout Skeleton */}
          <div className="flex gap-8 items-start">
            {/* Desktop Sidebar Skeleton */}
            <div className="w-64 hidden lg:block space-y-2 bg-white p-4 rounded-3xl border border-gray-100 shadow-xs">
              <div className="h-4 w-20 bg-gray-200 animate-pulse rounded mb-4" />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-10 w-full bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>

            {/* Product Cards Grid Skeleton */}
            <div className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex flex-col rounded-3xl bg-white overflow-hidden border border-gray-100 shadow-xs h-[280px] sm:h-[340px]">
                  <div className="w-full aspect-square sm:aspect-video bg-gray-200 animate-pulse" />
                  <div className="p-3 sm:p-4 flex flex-col flex-1 space-y-3">
                    <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded-md" />
                    <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded-md" />
                    <div className="mt-auto pt-2">
                      <div className="h-11 w-full bg-purple-100 animate-pulse rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
