export default function UnselectedProductCard(props) {
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
        <span className="category">{props.category}</span>
        <p className="product-name">{props.name}</p>
        <span className="price">${props.price.toFixed(2)}</span>
      </div>
    </article>
  )
}
