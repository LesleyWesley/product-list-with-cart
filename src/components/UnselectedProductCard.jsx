export default function UnselectedProductCard() {
  return (
    <article>
      <div className="card-img-section">
        <img src="./src/assets/image-tiramisu-mobile.jpg" alt="Image of Classic Tiramisu" />
        <button>
          <img src="./src/assets/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>
      <div className="card-text-section">
        <span className="category">Macaron</span>
        <p className="dessert-title">Macaron Mix of Five</p>
        <span className="price">$8.00</span>
      </div>
    </article>
  )
}
