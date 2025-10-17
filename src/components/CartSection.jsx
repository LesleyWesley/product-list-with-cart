import EmptyCart from "./EmptyCart"
import FullCart from "./FullCart"

export default function CartSection() {
  return (
    <div className="cart">
      <div className="cart-container">
        <h2>Your Cart (0)</h2>
        <FullCart />
      </div>
    </div>
  )
}
