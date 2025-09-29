import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { useState } from 'react'
import { ProductDetail } from './pages/ProductDetail'

 export const App = () => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) =>{
    setCartItems(prev => [...prev,product])
  }

  const onRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !==id))
  }
  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          <Route path='/cart' element={<CartPage cartItems={cartItems} onRemove={onRemove} />}
          />
          <Route path='/product/:id' element={<ProductDetail addToCart={addToCart}/>}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}