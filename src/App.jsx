import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UnselectedProductCard from "./components/UnselectedProductCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section className="product-section">
        <h1>Desserts</h1>
        <div className="product-container">
          <UnselectedProductCard />
          <UnselectedProductCard />
        </div>
      </section>
      <section className="cart-section">
        <p>This is where the cart will go!</p>
      </section>

    </main>
  )
}

export default App
