import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Testimonial from './Pages/Testimonial';
import BlogCard from './Pages/BlogCard';
import ProfileCard from './Pages/ProfileCard'
import ButtonComponent from './Pages/ButtonComponent';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="blogcard" element={<BlogCard />} />
        <Route path="profilecard" element={<ProfileCard />} />
        <Route path="buttoncomponent" element={<ButtonComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
