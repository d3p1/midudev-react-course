/**
 * @description Use cart custom hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useContext} from 'react'
import {CartContext} from '../context/cart.tsx'
import CartManager from '../utils/cart-manager.ts'
import {type Product} from '../types'

export default function useCart() {
  const {cart, addToCart, removeFromCart, clearCart} = useContext(CartContext)

  if (!cart || !addToCart || !removeFromCart || !clearCart) {
    throw new Error('useCart should be used inside a CartProvider.')
  }

  const findInCart = (product: Product) =>
    CartManager.findProductInCart(cart, product)

  return {cart, findInCart, addToCart, removeFromCart, clearCart}
}
