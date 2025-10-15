import UnselectedProductCard from "./UnselectedProductCard"
import SelectedProductCard from "./SelectedProductCard"

export default function ProductSection() {
  return (
    <section className="product-section">
      <h1>Desserts</h1>

      <div className="product-section-container">
        <SelectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
      </div>
    </section>
  )
}
