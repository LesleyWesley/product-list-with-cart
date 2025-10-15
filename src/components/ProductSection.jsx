import UnselectedProductCard from "./UnselectedProductCard"

export default function ProductSection() {
  return (
    <section className="product-section">
      <h1>Desserts</h1>

      <div className="product-section-container">
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
        <UnselectedProductCard />
      </div>
    </section>
  )
}
