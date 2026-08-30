"use client"

import * as React from "react"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { ShoppingCart, MapPin, Phone, User, ChevronRight } from "lucide-react"
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
    // Simulate Supabase insert delay
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
      <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA] items-center justify-center">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold font-display text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some delicious items to your cart before checking out.</p>
        <Link href="/menu">
          <Button className="rounded-full font-bold px-8">Return to Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            Secure <span className="text-orange-500">Checkout</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please provide your details below to complete your order.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  Delivery Details
                </h2>
                
                <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="e.g. 0300-0000000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" /> Delivery Address
                    </label>
                    <textarea 
                      rows={3}
                      {...register("address")}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none ${errors.address ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-transparent'}`}
                      placeholder="Sector, Street, House Number, Wah Cantt"
                    ></textarea>
                    {errors.address ? (
                      <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-2">Currently delivering only in Wah Cantt and nearby areas.</p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-28">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                        {item.image ? (
                          <Image src={item.image.src} alt={item.image.alt.en} fill className="object-cover" />
                        ) : (
                          <ShoppingCart className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                        )}
                        <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                          x{item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{item.name.en}</h4>
                        <div className="text-orange-600 font-bold text-sm mt-1">Rs. {(item.price.amount * item.quantity).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
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
                    <span className="font-bold text-green-600">Cash on Delivery</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-2 flex justify-between items-end">
                    <div>
                      <span className="block text-sm text-gray-500">Total to pay</span>
                      <span className="font-bold text-2xl text-gray-900">Rs. {(totalPrice() + 150).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  form="checkout-form"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg rounded-full font-bold bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? "Processing..." : "Place Order"} 
                  {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                </Button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  By placing your order, you agree to our Terms and Conditions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
