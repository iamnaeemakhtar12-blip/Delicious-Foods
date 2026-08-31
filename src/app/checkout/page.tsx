"use client"

import * as React from "react"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { ShoppingCart, MapPin, Phone, User, ChevronRight, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const checkoutSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().regex(/^03\d{2}-?\d{7}$|^03\d{9}$/, { message: "Please enter a valid Pakistani phone number (e.g., 0300-1234567)" }),
  address: z.string().min(10, { message: "Address must be at least 10 characters long" })
})

type CheckoutFormValues = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCartStore()
  const [isSummaryExpanded, setIsSummaryExpanded] = React.useState(false)
  
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { 
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: ""
    }
  })

  const onSubmit = async (data: CheckoutFormValues) => {
    // Simulate order placement delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const orderDetails = {
      ...data,
      items: items.map(i => ({ name: i.name.en, quantity: i.quantity, price: i.price.amount })),
      subtotal: totalPrice(),
      total: totalPrice() + 150
    }
    
    sessionStorage.setItem('lastOrder', JSON.stringify(orderDetails))
    clearCart()
    
    router.push("/checkout/success")
  }

  if (!mounted) return null

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FAFAFA] items-center justify-center p-6 text-center">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some delicious items to your cart before checking out.</p>
        <Link href="/menu">
          <Button className="rounded-full font-bold px-8 bg-[#54064F] hover:bg-[#741066] text-white">Return to Menu</Button>
        </Link>
      </div>
    )
  }

  const grandTotal = totalPrice() + 150;

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] pb-24 lg:pb-12">
      {/* Checkout Page Header (No extra top padding gap) */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-2">
            Secure <span className="text-[#54064F]">Checkout</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Please provide your details below to complete your order.
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

          {/* Option A: Mobile Collapsible Order Summary (< 1024px) */}
          <div className="lg:hidden bg-white border border-gray-200/80 rounded-2xl p-4 mb-6 shadow-xs">
            <button
              onClick={() => setIsSummaryExpanded(!isSummaryExpanded)}
              className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-gray-900"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#54064F]" />
                <span>Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#54064F] font-extrabold">Rs. {grandTotal.toLocaleString()}</span>
                {isSummaryExpanded ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>
            </button>

            {isSummaryExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                <div className="space-y-3 max-h-[240px] overflow-y-auto pr-1">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        {item.image ? (
                          <Image src={item.image.src} alt={item.image.alt.en} fill className="object-cover" />
                        ) : (
                          <ShoppingCart className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                        )}
                        <span className="absolute top-0 right-0 bg-[#54064F] text-white text-[9px] font-bold px-1 py-0.2 rounded-bl-md">
                          x{item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-gray-900 truncate">{item.name.en}</h4>
                        <div className="text-xs text-gray-500">Rs. {(item.price.amount * item.quantity).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-3 border-t border-gray-100 text-xs sm:text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold">Rs. {totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-bold">Rs. 150</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Payment Method</span>
                    <span className="font-bold text-emerald-600">Cash on Delivery</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Grid Layout: Form Left, Summary Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Delivery Details Form (Left Column) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Delivery Details
                </h2>
                
                <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#54064F] transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="e.g. Naeem Akhtar"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#54064F] transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="e.g. 0300-1234567"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" /> Delivery Address
                    </label>
                    <textarea 
                      rows={3}
                      {...register("address")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#54064F] transition-all resize-none ${errors.address ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="Street, Sector, House Number, Wah Cantt"
                    ></textarea>
                    {errors.address ? (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.address.message}</p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1">Delivering across Wah Cantt & surrounding sectors.</p>
                    )}
                  </div>

                  {/* Desktop Submit Button (Hidden on Mobile) */}
                  <div className="hidden lg:block pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg rounded-full font-bold bg-[#54064F] hover:bg-[#741066] text-white shadow-lg shadow-purple-900/20 disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? "Processing Order..." : "Place Order (Cash on Delivery)"} 
                      {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Desktop Sticky Order Summary (Right Column - Hidden on Mobile) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                        {item.image ? (
                          <Image src={item.image.src} alt={item.image.alt.en} fill className="object-cover" />
                        ) : (
                          <ShoppingCart className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                        )}
                        <span className="absolute top-0 right-0 bg-[#54064F] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                          x{item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{item.name.en}</h4>
                        <div className="text-[#54064F] font-bold text-sm mt-0.5">Rs. {(item.price.amount * item.quantity).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 border-t border-gray-100 pt-6">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">Rs. {totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-gray-900">Rs. 150</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Payment Method</span>
                    <span className="font-bold text-emerald-600">Cash on Delivery</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-end">
                    <div>
                      <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider">Total to pay</span>
                      <span className="font-extrabold text-2xl text-[#54064F]">Rs. {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  form="checkout-form"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg rounded-full font-bold bg-[#54064F] hover:bg-[#741066] text-white shadow-lg shadow-purple-900/20 disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? "Processing Order..." : "Place Order"} 
                  {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                </Button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  By placing your order, you agree to our Terms & Delivery policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Bottom "Place Order" Bar for Mobile (< 1024px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3.5 bg-white border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] lg:hidden flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-500 font-medium">Total to pay</span>
          <span className="text-lg font-black text-[#54064F]">
            Rs. {grandTotal.toLocaleString()}
          </span>
        </div>

        <Button 
          type="submit" 
          form="checkout-form"
          disabled={isSubmitting}
          className="rounded-full bg-[#54064F] hover:bg-[#741066] text-white font-bold px-6 h-12 text-sm shadow-md flex items-center"
        >
          {isSubmitting ? "Processing..." : "Place Order"}
          {!isSubmitting && <ChevronRight className="w-4 h-4 ml-1" />}
        </Button>
      </div>

    </div>
  )
}
