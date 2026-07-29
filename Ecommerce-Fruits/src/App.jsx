import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <Hero />
      <Products onAddToCart={addToCart} />
      <Footer />
    </>
  )
}

export default App
