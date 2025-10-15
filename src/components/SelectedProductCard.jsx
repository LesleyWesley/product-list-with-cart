export default function SelectedProductCard() {
  return (
    <article className="product-card">
      <div className="img-section">
        <img src="./src/assets/image-waffle-mobile.jpg" alt="Waffle with berries" className="thumbnail selected"/>
        <div className="add-delete-section">
            <div className="add-delete-section-container">
              <button type="button" aria-label="Delete one from cart">
                  <img src="./src/assets/icon-decrement-quantity.svg" alt="delete icon" />
              </button>
              <span className="product-quantity">4</span>
              <button type="button" aria-label="Add one to cart">
                  <img src="./src/assets/icon-increment-quantity.svg" alt="add icon" />
              </button>
            </div>
        </div>
      </div>
      <div className="text-section">
        <span className="category">Waffle</span>
        <p className="product-name">Waffle with Berries</p>
        <span className="price">$6.50</span>
      </div>
    </article>
  )
}
