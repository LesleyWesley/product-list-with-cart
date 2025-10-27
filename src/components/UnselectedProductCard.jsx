

export default function UnselectedProductCard(props) {

  const productObject = {name: `${props.name}`, price: `${props.price}`}

  function addItem() {
    if (props.itemCount === 0) {
      props.setCart(prevCart => [...prevCart,  productObject])
      props.setItemCount(prevCount => prevCount + 1)
    } else {
      props.setItemCount(prevCount => prevCount + 1)
      console.log(props.itemCount)
    }
  }

  return (
    <article className="product-card">
      <div className="img-section">
        <img src="./src/assets/image-waffle-mobile.jpg" alt="Waffle with berries" className="thumbnail"/>
        <button type="button" className="add-to-cart-button" onClick={addItem}>
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
