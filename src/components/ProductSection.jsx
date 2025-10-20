import React from "react"
import UnselectedProductCard from "./UnselectedProductCard"
import SelectedProductCard from "./SelectedProductCard"
import data from "/src/data.json"

export default function ProductSection(props) {

  function handleClick(e) {
    props.setCart(prevCart => [...prevCart,  {name: name, price: 6.50}])
  }

  const productElements = data.map(product => (
    <UnselectedProductCard
      key = {product.name}
      name = {product.name}
      category = {product.category}
      price = {product.price}
      img = {product.image.thumbnail}
      cart={props.cart}
      setCart = {props.setCart}
      handleClick = {handleClick}
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
