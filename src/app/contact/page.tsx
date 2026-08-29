"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#FAFAFA]">
      
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our menu, delivery zones, or just want to say hi.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Left Side: Info */}
            <div className="bg-orange-50 p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold font-display text-gray-900 mb-8">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full text-orange-500 shadow-sm mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Our Location</h4>
                      <p className="text-gray-600 mt-1">Sector 1, Wah Cantt<br/>Punjab, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full text-orange-500 shadow-sm mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Phone Number</h4>
                      <p className="text-gray-600 mt-1">+92 300 0000000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full text-orange-500 shadow-sm mt-1">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Opening Hours</h4>
                      <p className="text-gray-600 mt-1">Mon - Sun: 11:00 AM - 1:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <Button 
                  asChild
                  className="w-full sm:w-auto rounded-full font-bold px-8 bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2"
                >
                  <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-10 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="button" className="w-full rounded-xl font-bold py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
