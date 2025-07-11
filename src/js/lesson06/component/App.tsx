/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import AddToCartIcon from './app/icon/AddToCartIcon.tsx'
import RemoveFromCartIcon from './app/icon/RemoveFromCartIcon.tsx'
import ClearCartIcon from './app/icon/ClearCartIcon.tsx'
import CartIcon from './app/icon/CartIcon.tsx'

export default function App() {
  return (
    <>
      <AddToCartIcon />
      <RemoveFromCartIcon />
      <ClearCartIcon />
      <CartIcon />
    </>
  )
}
