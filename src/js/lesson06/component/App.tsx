/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import {CartProvider} from '../context/cart.tsx'
import {FilterProvider} from '../context/filter.tsx'
import catalog from '../mock/products.json'
import Cart from './app/Cart.tsx'
import ProductGrid from './app/ProductGrid.tsx'

export default function App() {
  const [products] = useState(catalog.products)

  return (
    <div className="w-full h-full">
      <FilterProvider>
        <CartProvider>
          <Cart />
          <ProductGrid products={products} />
        </CartProvider>
      </FilterProvider>
    </div>
  )
}
