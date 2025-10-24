import React from "react"
import ProductCard from "./ProductCard"
import data from "/src/data.json"

export default function ProductSection(props) {
  console.log(props.cart)

  const productElements = data.map(product =>(
    <ProductCard
      key = {product.name}
      name = {product.name}
      category = {product.category}
      price = {product.price}
      img = {product.img}
      cart={props.cart}
      setCart = {props.setCart}
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
