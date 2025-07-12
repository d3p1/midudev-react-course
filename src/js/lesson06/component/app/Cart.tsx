/**
 * @description Cart
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useId} from 'react'
import useCart from '../../hook/useCart.ts'
import AddToCartIcon from './icon/AddToCartIcon.tsx'
import CartIcon from './icon/CartIcon.tsx'
import ClearCartIcon from './icon/ClearCartIcon.tsx'

export default function Cart() {
  const {cart, clearCart, addToCart} = useCart()
  const showCartCheckboxId = useId()

  return (
    <div>
      <label
        htmlFor={showCartCheckboxId}
        className="border-secondary border-2 border-solid p-4 flex justify-center items-center cursor-pointer max-w-1/8 mx-auto"
      >
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={showCartCheckboxId}
        hidden
        className="peer/show-cart"
      />
      <aside className="absolute top-0 right-0 z-20 h-full w-1/4 bg-primary-700 inset-shadow-[black_0_0_1rem] flex flex-col items-center translate-x-full peer-checked/show-cart:translate-x-0 transition-transform duration-500">
        <ul className="flex flex-col justify-start items-center gap-4 py-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <h3 className="font-black text-md">{item.title}</h3>
              <img src={item.thumbnail} alt={item.title} />
              <div className="italic text-sm">{item.price}</div>
              <div>
                <span>Quantity:</span> {item.quantity}
              </div>
              <button
                className="cursor-pointer"
                onClick={() => addToCart(item)}
              >
                <AddToCartIcon />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="border-secondary border-2 border-solid p-4 mt-8 cursor-pointer"
          onClick={clearCart}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}
