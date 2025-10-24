import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductSection from "./components/ProductSection"
import CartSection from "./components/CartSection"

function App() {

  const [cart, setCart] = React.useState([]);

  return (
    <main>
      <ProductSection cart = {cart} setCart={setCart}/>
      <CartSection cart={cart}/>
    </main>
  )
}

export default App
