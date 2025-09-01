import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Home from './Home.jsx'
import Loja from './loja.jsx'
import Produto from './paginaProduto.jsx'
import Carrinho from './carrinho.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<BrowserRouter basename="/Checkpoint-04---Web-Dev">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
