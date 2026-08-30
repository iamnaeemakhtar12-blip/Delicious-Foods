import { SectionHeading } from "@/components/ui/section-heading";

export default function MenuLoading() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading subtitle="Loading our delicious offerings..." className="mb-12">
          Full Menu
        </SectionHeading>
        
        {/* Category Nav Skeleton */}
        <div className="sticky top-16 md:top-20 z-40 bg-[#FAFAFA]/90 backdrop-blur-md pt-4 pb-2 mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 w-24 bg-gray-200 animate-pulse rounded-full flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <div key={i} className="flex flex-col rounded-xl sm:rounded-2xl bg-white overflow-hidden border border-gray-100 shadow-sm h-[180px] sm:h-[320px]">
              <div className="w-full h-24 sm:h-48 bg-gray-200 animate-pulse" />
              <div className="p-2 sm:p-4 flex flex-col flex-1">
                <div className="h-4 sm:h-6 w-3/4 bg-gray-200 animate-pulse rounded mb-2" />
                <div className="hidden sm:block h-4 w-full bg-gray-100 animate-pulse rounded mb-1" />
                <div className="mt-auto pt-2 sm:pt-4 flex flex-col sm:flex-row justify-between items-center gap-1">
                  <div className="h-4 sm:h-6 w-12 sm:w-20 bg-gray-200 animate-pulse rounded" />
                  <div className="h-6 sm:h-8 w-full sm:w-20 bg-orange-100 animate-pulse rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
