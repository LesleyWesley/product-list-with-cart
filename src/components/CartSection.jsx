import EmptyCart from "./EmptyCart"
import FullCart from "./FullCart"

export default function CartSection(props) {

  return (
    <div className="cart">
      <div className="cart-container">
        <h2>Your Cart ({props.cart.length})</h2>
        {props.cart.length > 0 ? <FullCart /> : <EmptyCart />}


      </div>
    </div>
  )
}
