import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <main>

    {/*This is the left side of the page*/}

      <div className="product-section">
        <h1>Desserts</h1>

        <div className="product-cards-container">
          This is where the product cards will go
        </div>

      </div>

      {/*This is the right side of the page (aka the cart side) */}
      
      <div className="cart-section">
        This is where the cart will go
      </div>

    </main>
  )
}

export default App
