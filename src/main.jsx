import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Story from './pages/Story'
import Menu from './pages/Menu'
import Product from './pages/Product'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Support from './pages/Support'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="/cau-chuyen" element={<Story />} />
          <Route path="/thuc-don" element={<Menu />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/trai-nghiem" element={<Experience />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/ho-tro/:topic" element={<Support />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
