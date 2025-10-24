import React from "react"
import SelectedProductCard from "./SelectedProductCard"
import UnselectedProductCard from "./UnselectedProductCard"

export default function ProductCard(props) {

  const [count, setCount] = React.useState(0);
  console.log(count)

  if (count > 0) {
      return (
        <SelectedProductCard
        name = {props.name}
        category = {props.category}
        price = {props.price}
        img = {props.img}
        cart={props.cart}
        setCart = {props.setCart}
        count = {count}
        setCount = {setCount}
      />
    )

} else {
      return (
        <UnselectedProductCard
        name = {props.name}
        category = {props.category}
        price = {props.price}
        img = {props.img}
        cart={props.cart}
        setCart = {props.setCart}
        count = {count}
        setCount = {setCount}
      />
      )
    }
}
