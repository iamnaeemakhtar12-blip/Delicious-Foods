import { ShieldAlert } from "lucide-react"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-200 p-2 rounded-lg animate-pulse w-9 h-9"></div>
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded"></div>
        </div>
        <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
      </div>

      {/* Kanban Board Skeleton */}
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-6 min-w-max pb-8">
          {[1, 2, 3, 4].map(col => (
            <div key={col} className="w-80 flex flex-col h-[calc(100vh-200px)]">
              {/* Column Header */}
              <div className="flex items-center justify-between p-4 rounded-t-2xl border-b-2 border-white bg-gray-100">
                <div className="h-6 w-24 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-5 w-8 bg-gray-200 animate-pulse rounded-full"></div>
              </div>
              
              {/* Column Body */}
              <div className="flex-1 bg-gray-50 p-4 rounded-b-2xl overflow-y-auto space-y-4 border border-gray-200 border-t-0">
                {[1, 2].map(card => (
                  <div key={card} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-40 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                      <div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    <div className="space-y-2 my-2">
                      <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                      <div className="h-4 w-full bg-gray-100 animate-pulse rounded"></div>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div className="h-5 w-16 bg-gray-200 animate-pulse rounded"></div>
                      <div className="h-6 w-20 bg-gray-200 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
