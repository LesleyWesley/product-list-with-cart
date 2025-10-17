import CartItem from "./CartItem"

export default function FullCart() {
  return (
    <div className="full-cart">
      <ul className="cart-item-list">
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>

      <div className="total-section">
        <p>Order Total</p>
        <span className="order-total">$46.50</span>
      </div>

      <div className="eco-section">
        <img src="./src/assets/icon-carbon-neutral.svg" alt="" />
        <p>This is a <span>carbon-neutral</span> delivery</p>
      </div>

      <button className="confirm-order">Confirm Order</button>
    </div>
  )
}
