import React from "react"
import SelectedProductCard from "./SelectedProductCard"
import UnselectedProductCard from "./UnselectedProductCard"

export default function ProductCard(props) {
    const [itemCount, setItemCount] = React.useState(0);

        if (itemCount > 0) {
            return (
              <SelectedProductCard
              name = {props.name}
              category = {props.category}
              price = {props.price}
              img = {props.img}
              cart={props.cart}
              setCart = {props.setCart}
              itemCount = {itemCount}
              setItemCount = {setItemCount}
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
              itemCount = {itemCount}
              setItemCount = {setItemCount}
              />
            )
          }
}
