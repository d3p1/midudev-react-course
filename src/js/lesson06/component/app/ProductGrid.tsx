/**
 * @description Product grid
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import useCart from '../../hook/useCart.ts'
import useFilter from '../../hook/useFilter.ts'
import {type Product} from '../../types'
import Filter from './product-grid/Filter.tsx'
import AddToCartIcon from './icon/AddToCartIcon.tsx'
import RemoveFromCartIcon from './icon/RemoveFromCartIcon.tsx'

export default function ProductGrid({products}: {products: Product[]}) {
  const {filterProducts} = useFilter()
  const {findInCart, addToCart, removeFromCart} = useCart()

  const filteredProducts = filterProducts(products)

  return (
    <div className="px-4 mt-15">
      <Filter />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 place-items-center mt-8">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col gap-2 justify-center items-center bg-primary-700 p-4 rounded-2xl inset-shadow-[black_0px_0px_1rem] w-[250px]"
          >
            <h3 className="font-black text-md text-center h-10">
              {product.title}
            </h3>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[100px]"
            />
            <div className="italic text-sm">${product.price}</div>

            {findInCart(product) === -1 ? (
              <button
                className="cursor-pointer"
                onClick={() => addToCart(product)}
              >
                <AddToCartIcon />
              </button>
            ) : (
              <button
                className="cursor-pointer"
                onClick={() => removeFromCart(product)}
              >
                <RemoveFromCartIcon />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
