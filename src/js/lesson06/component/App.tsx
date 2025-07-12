/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import {FilterProvider} from '../context/filter.tsx'
import catalog from '../mock/products.json'
import ProductGrid from './app/ProductGrid.tsx'

export default function App() {
  const [products] = useState(catalog.products)

  return (
    <FilterProvider>
      <ProductGrid products={products} />
    </FilterProvider>
  )
}
