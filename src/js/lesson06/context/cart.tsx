/**
 * @description Cart context
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {createContext, type ReactNode, useState} from 'react'
import type {Product, CartItem} from '../types'

export const findProductInCart = (cart: CartItem[], product: Product) =>
  cart.findIndex((item) => item.id === product.id)

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
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const productIndex = findProductInCart(cart, product)

    if (productIndex > -1) {
      const newCart = structuredClone(cart)
      newCart[productIndex].quantity += 1
      setCart(newCart)
      return
    }

    setCart([...cart, {...product, quantity: 1}])
  }

  const removeFromCart = (product: Product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}
