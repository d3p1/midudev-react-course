/**
 * @description Cart manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {CartItem, Product} from '../types'

export default class CartManager {
  /**
   * Load cart
   *
   * @returns {CartItem[]}
   */
  static loadCart(): CartItem[] {
    const cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(cart) as CartItem[]
    }

    return []
  }

  /**
   * Save cart
   *
   * @param   {CartItem[]} cart
   * @returns {void}
   */
  static saveCart(cart: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  /**
   * Find product in cart
   *
   * @param   {CartItem[]} cart
   * @param   {Product}    product
   * @returns {number}
   */
  static findProductInCart(cart: CartItem[], product: Product): number {
    return cart.findIndex((item) => item.id === product.id)
  }
}
