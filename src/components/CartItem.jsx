export default function CartItem() {
  return (
    <li className="cart-item">
      <div className="cart-item-left">
        <h3>Vanilla Bean Creme Brulee</h3>
        <div className="cart-item-details">
            <span className="item-amount">4x</span>
            <span className="single-price">@ $7.00</span>
            <span className="cart-item-total">$28.00</span>
        </div>
      </div>

      <button aria-label="Delete from cart">
        <img src="./src/assets/icon-remove-item.svg" alt="Remove item" />
      </button>
    </li>
  )
}
