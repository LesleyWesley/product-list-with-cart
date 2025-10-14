import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductSection from "./components/ProductSection"
import CartSection from "./components/CartSection"

function App() {

  return (
    <main>
      <ProductSection />
      <CartSection />
    </main>
  )
}

export default App
