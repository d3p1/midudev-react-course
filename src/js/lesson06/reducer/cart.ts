/**
 * @description Cart reducer
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type Product, type CartItem} from '../types'
import CartManager from '../utils/cart-manager.ts'

export const CART_ACTION_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

export function CartReducer(
  state: CartItem[],
  action: {type: string; payload: Product | null},
) {
  const {type, payload} = action

  let nextState: CartItem[] = structuredClone(state)

  switch (type) {
    case CART_ACTION_TYPE.ADD_TO_CART:
      if (payload) {
        const itemIndex = CartManager.findProductInCart(state, payload)
        if (itemIndex !== -1) {
          nextState[itemIndex].quantity += 1
        } else {
          nextState.push({...payload, quantity: 1})
        }
      }
      break

    case CART_ACTION_TYPE.REMOVE_FROM_CART:
      if (payload) {
        nextState = nextState.filter((item) => item.id !== payload.id)
      }
      break

    case CART_ACTION_TYPE.CLEAR_CART:
      nextState = []
      break
  }

  CartManager.saveCart(nextState)

  return nextState
}
