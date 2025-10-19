import UnselectedProductCard from "./UnselectedProductCard"
import SelectedProductCard from "./SelectedProductCard"
import data from "/src/data.json"

export default function ProductSection() {

  const productElements = data.map(product => (
    <UnselectedProductCard
      name = {product.name}
      category = {product.category}
      price = {product.price}
    />
  ))

  return (
    <section className="product-section">
      <h1>Desserts</h1>

      <div className="product-section-container">
        {productElements}
      </div>
    </section>
  )
}
