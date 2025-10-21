export default function SelectedProductCard(props) {
  const productObject = {name: `${props.name}`, price: `${props.price}`}

  function addItem() {
    props.setCart(prevCart => [...prevCart,  productObject])
  }

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
              <button type="button" aria-label="Add one to cart" onClick={addItem}>
                  <img src="./src/assets/icon-increment-quantity.svg" alt="add icon" />
              </button>
            </div>
        </div>
      </div>
      <div className="text-section">
        <span className="category">{props.category}</span>
        <p className="product-name">{props.name}</p>
        <span className="price">${props.price.toFixed(2)}</span>
      </div>
    </article>
  )
}
