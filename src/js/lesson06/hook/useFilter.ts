/**
 * @description Use filter custom hook
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useContext} from 'react'
import {FilterContext} from '../context/filter.tsx'
import {type Product} from '../types'

export default function useFilter() {
  const {filter, setFilter} = useContext(FilterContext)

  if (!filter || !setFilter) {
    throw new Error('useFilter should be used inside a FilterProvider.')
  }

  const filterProducts = (products: Product[]) =>
    products.filter(
      (product) =>
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category),
    )

  return {filter, setFilter, filterProducts}
}
