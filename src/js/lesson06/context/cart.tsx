/**
 * @description Cart context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createContext, type ReactNode} from 'react'
import useCartReducer from '../hook/useCartReducer.ts'
import type {Product, CartItem} from '../types'

export const CartContext = createContext<{
  cart: CartItem[] | null
  addToCart: ((product: Product) => void) | null
  removeFromCart: ((product: Product) => void) | null
  clearCart: (() => void) | null
}>({
  cart: null,
  addToCart: null,
  removeFromCart: null,
  clearCart: null,
})

export function CartProvider({children}: {children: ReactNode}) {
  const {state, addToCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider
      value={{cart: state, addToCart, removeFromCart, clearCart}}
    >
      {children}
    </CartContext.Provider>
  )
}
