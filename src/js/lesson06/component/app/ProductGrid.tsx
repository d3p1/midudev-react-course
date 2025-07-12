/**
 * @description Product grid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState} from 'react'
import {type Product, type Filter as FilterType} from '../../types'
import Filter from './product-grid/Filter.tsx'
import AddToCartIcon from './icon/AddToCartIcon.tsx'

export default function ProductGrid({products}: {products: Product[]}) {
  const [filter, setFilter] = useState<FilterType>({
    minPrice: 1000,
    category: 'all',
  })

  const filteredProducts = products.filter(
    (product) =>
      product.price >= filter.minPrice &&
      (filter.category === 'all' || product.category === filter.category),
  )

  return (
    <div className="w-full h-full px-4">
      <Filter changeFilter={setFilter} />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 place-items-center mt-8">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col gap-2 justify-center items-center bg-primary-700 p-4 rounded-2xl inset-shadow-[black_0px_0px_1rem]"
          >
            <h3 className="font-black text-md text-center h-20">
              {product.title}
            </h3>
            <img src={product.thumbnail} alt={product.title} />
            <div className="italic text-sm">${product.price}</div>
            <button className="cursor-pointer">
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
