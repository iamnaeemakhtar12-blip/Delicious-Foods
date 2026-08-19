import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '@/types/cart'

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  toggleCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (item) => {
        set((state) => {
          // Simplistic check for existing product. Real app would check variants too.
          const existingItemIndex = state.items.findIndex(i => i.productId === item.productId)
          
          if (existingItemIndex >= 0) {
            const newItems = [...state.items]
            newItems[existingItemIndex].quantity += item.quantity
            return { items: newItems, isOpen: true }
          }
          
          return { 
            items: [...state.items, { ...item, id: `${item.productId}-${Date.now()}` }],
            isOpen: true
          }
        })
      },
      removeItem: (id) => set((state) => ({ items: state.items.filter(i => i.id !== id) })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: quantity > 0 
          ? state.items.map(i => i.id === id ? { ...i, quantity } : i)
          : state.items.filter(i => i.id !== id)
      })),
      clearCart: () => set({ items: [] }),
      setIsOpen: (isOpen) => set({ isOpen }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: () => get().items.reduce((total, item) => total + (item.price.amount * item.quantity), 0),
    }),
    {
      name: 'delicious-foods-cart',
    }
  )
)
