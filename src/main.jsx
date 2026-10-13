/* Molulos que vamos a usar */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* importamos el estilo */
import './index.css'

/* importamos componentes */
import NavBar from './components/navBar/navbar'
import Footer from './components/footer/footer'

/* importamos las paginas */
import Home from './pages/home/home'
import Products from './pages/products/products'
import ProductoDetalle from './pages/productoDetalle/productoDetalle'
import AboutUs from './pages/aboutUs/aboutUs'
import Carrito from './pages/carrito/carrito'

import { CartProvider } from './context/CartContext'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/product/:id' element={<ProductoDetalle/>} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);
