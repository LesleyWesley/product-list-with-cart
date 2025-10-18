export default function CartItem() {
  return (
    <li className="cart-item">
      <div className="cart-item-left">
        <h3>Classic Tiramisu</h3>
        <div className="cart-item-details">
            <span className="item-amount">1x</span>
            <span className="single-price">@ $5.50</span>
            <span className="cart-item-total">$5.50</span>
        </div>
      </div>

      <button aria-label="Delete from cart" className="delete-button">
        <img src="./src/assets/icon-remove-item.svg" alt="Remove item" />
      </button>
    </li>
  )
}
