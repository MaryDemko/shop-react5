import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { CartPage } from './pages/CartPage'
import { useState } from 'react'

 export const App = () => {
  const [cartItems, setCartItems] = useState ([])
  const onRemove = id => {
    setCartItems(prev => prev.filter(item => item.id !==id))
  }
  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage cartItems={cartItems} onRemove={onRemove} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}