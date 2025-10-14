export default function UnselectedProductCard() {
  return (
    <article className="product-card">
      <div className="img-section">
        <img src="./src/assets/image-waffle-mobile.jpg" alt="Waffle with berries" className="thumbnail"/>
        <button type="button" className="add-to-cart-button">
          <img src="./src/assets/icon-add-to-cart.svg" alt=""/>
          Add to Cart
        </button>
      </div>
      <div className="text-section">
        <span className="category">Waffle</span>
        <p className="product-name">Waffle with Berries</p>
        <span className="price">$6.50</span>
      </div>
    </article>
  )
}
