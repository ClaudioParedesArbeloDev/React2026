/* Molulos que vamos a usar */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* importamos el estilo */
import './index.css'

/* importamos componentes */
import NavBar from './components/navBar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Products from './pages/products/products'
import ProductoDetalle from './pages/productoDetalle/productoDetalle'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/product/:id' element={<ProductoDetalle/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
