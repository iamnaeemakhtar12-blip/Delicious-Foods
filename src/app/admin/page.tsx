"use client"

import * as React from "react"
import { ShieldAlert, Clock, ChefHat, Truck, CheckCircle2 } from "lucide-react"

// Types for our Mock Orders
type OrderStatus = 'PENDING' | 'PREPARING' | 'OUT_FOR_DELIVERY' | 'COMPLETED'

interface Order {
  id: string
  created_at: string
  customer_name: string
  customer_phone: string
  delivery_address: string
  total_amount: number
  status: OrderStatus
  items: Array<{ name: string, quantity: number }>
}

const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-001",
    created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    customer_name: "Ahmed Ali",
    customer_phone: "0300-1234567",
    delivery_address: "House 12, Street 4, Sector 1, Wah Cantt",
    total_amount: 1450,
    status: "PENDING",
    items: [
      { name: "Zinger Burger", quantity: 2 },
      { name: "French Fries", quantity: 1 }
    ]
  },
  {
    id: "ORD-002",
    created_at: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    customer_name: "Sarah Khan",
    customer_phone: "0333-7654321",
    delivery_address: "Flat 3B, Askari Apartments, Wah Cantt",
    total_amount: 2500,
    status: "PREPARING",
    items: [
      { name: "Delicious Special Pizza (Large)", quantity: 1 },
      { name: "Mint Margarita", quantity: 2 }
    ]
  },
  {
    id: "ORD-003",
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    customer_name: "Usman Tariq",
    customer_phone: "0345-9988776",
    delivery_address: "Sector 3, Anwar Street, Wah Cantt",
    total_amount: 850,
    status: "OUT_FOR_DELIVERY",
    items: [
      { name: "Chicken Broast", quantity: 1 },
      { name: "Zarda", quantity: 1 }
    ]
  }
]

export default function AdminDashboard() {
  const [orders, setOrders] = React.useState<Order[]>(MOCK_ORDERS)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  const columns = [
    { id: 'PENDING', title: 'Pending', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'PREPARING', title: 'Preparing', icon: ChefHat, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'OUT_FOR_DELIVERY', title: 'Out for Delivery', icon: Truck, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { id: 'COMPLETED', title: 'Completed', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-900 p-2 rounded-lg">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold font-display text-gray-900">Admin Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>System Online</span>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-6 min-w-max pb-8">
          
          {columns.map(column => {
            const columnOrders = orders.filter(o => o.status === column.id)
            
            return (
              <div key={column.id} className="w-80 flex flex-col h-[calc(100vh-200px)]">
                {/* Column Header */}
                <div className={`flex items-center justify-between p-4 rounded-t-2xl border-b-2 border-white ${column.bg}`}>
                  <div className="flex items-center space-x-2">
                    <column.icon className={`w-5 h-5 ${column.color}`} />
                    <h2 className={`font-bold ${column.color}`}>{column.title}</h2>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold bg-white ${column.color} shadow-sm`}>
                    {columnOrders.length}
                  </span>
                </div>
                
                {/* Column Body */}
                <div className="flex-1 bg-gray-100/50 p-4 rounded-b-2xl overflow-y-auto space-y-4 border border-gray-200 border-t-0">
                  {columnOrders.map(order => (
                    <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-bold text-gray-400">#{order.id}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(order.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="font-bold text-gray-900">{order.customer_name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">{order.delivery_address}</p>
                        <p className="text-sm text-orange-500 font-medium mt-1">{order.customer_phone}</p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-2 border border-gray-100">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-700">{item.quantity}x {item.name}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="font-bold text-gray-900">Rs. {order.total_amount}</span>
                        
                        {/* Action Buttons based on status */}
                        <div className="flex space-x-2">
                          {column.id === 'PENDING' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'PREPARING')}
                              className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full hover:bg-blue-600 transition-colors"
                            >
                              Accept
                            </button>
                          )}
                          {column.id === 'PREPARING' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'OUT_FOR_DELIVERY')}
                              className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full hover:bg-yellow-600 transition-colors"
                            >
                              Dispatch
                            </button>
                          )}
                          {column.id === 'OUT_FOR_DELIVERY' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'COMPLETED')}
                              className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-colors"
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {columnOrders.length === 0 && (
                    <div className="h-24 flex items-center justify-center text-sm text-gray-400 italic">
                      No orders here
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}
