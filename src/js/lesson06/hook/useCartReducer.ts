/**
 * @description Use cart reducer custom hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useReducer} from 'react'
import {type Product} from '../types'
import {CartReducer, CART_ACTION_TYPE} from '../reducer/cart.ts'
import CartManager from '../utils/cart-manager.ts'

export default function useCartReducer() {
  const [state, dispatch] = useReducer(CartReducer, CartManager.loadCart())

  const addToCart = (product: Product) => {
    dispatch({
      type: CART_ACTION_TYPE.ADD_TO_CART,
      payload: product,
    })
  }

  const removeFromCart = (product: Product) => {
    dispatch({
      type: CART_ACTION_TYPE.REMOVE_FROM_CART,
      payload: product,
    })
  }

  const clearCart = () => {
    dispatch({
      type: CART_ACTION_TYPE.CLEAR_CART,
      payload: null,
    })
  }

  return {state, addToCart, removeFromCart, clearCart}
}
