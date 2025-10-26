import React from "react"
import SelectedProductCard from "./SelectedProductCard"
import UnselectedProductCard from "./UnselectedProductCard"

export default function ProductCard(props) {
      return (
        <SelectedProductCard
        name = {props.name}
        category = {props.category}
        price = {props.price}
        img = {props.img}
        cart={props.cart}
        setCart = {props.setCart}
      />
    )
}
