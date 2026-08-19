"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const [orderDetails, setOrderDetails] = React.useState<any>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const stored = sessionStorage.getItem('lastOrder')
    if (stored) {
      setOrderDetails(JSON.parse(stored))
    }
  }, [])

  const handleWhatsAppHandoff = () => {
    if (!orderDetails) return

    const itemsText = orderDetails.items
      .map((i: any) => `${i.quantity}x ${i.name} (Rs. ${i.price * i.quantity})`)
      .join("\n")

    const msg = `*NEW ORDER - DELICIOUS FOODS*\n\n` +
      `*Customer:* ${orderDetails.name}\n` +
      `*Phone:* ${orderDetails.phone}\n` +
      `*Address:* ${orderDetails.address}\n\n` +
      `*Items:*\n${itemsText}\n\n` +
      `*Subtotal:* Rs. ${orderDetails.subtotal}\n` +
      `*Delivery:* Rs. 150\n` +
      `*TOTAL:* Rs. ${orderDetails.total}\n\n` +
      `*Payment:* Cash on Delivery\n`

    const waLink = `https://wa.me/923218807790?text=${encodeURIComponent(msg)}`
    window.open(waLink, '_blank')
  }

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
        
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        
        <h1 className="text-4xl font-bold font-display text-gray-900 mb-4">
          Order Saved!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Your order has been recorded in our system. To finalize and fast-track your delivery, please send the confirmation to our WhatsApp.
        </p>

        {orderDetails && (
          <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Order Snapshot</h3>
            <p className="text-sm text-gray-600"><strong>Name:</strong> {orderDetails.name}</p>
            <p className="text-sm text-gray-600 mt-1"><strong>Address:</strong> {orderDetails.address}</p>
            <p className="text-sm font-bold text-orange-600 mt-3 border-t border-gray-200 pt-3">
              Total to pay: Rs. {orderDetails.total}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <Button 
            onClick={handleWhatsAppHandoff}
            className="w-full py-6 text-lg rounded-full font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 flex items-center justify-center transition-transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2 fill-current" />
            Send to WhatsApp to Confirm
          </Button>
          
          <Link href="/" className="block">
            <Button variant="outline" className="w-full py-6 text-lg rounded-full font-bold text-gray-600 border-gray-200 hover:bg-gray-50">
              Return Home <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
