import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Testimonial from './Pages/Testimonial';
import BlogCard from './Pages/BlogCard';
import ProfileCard from './Pages/ProfileCard'
import ButtonComponent from './Pages/ButtonComponent';
import BadgeComponent from './Pages/BadgeComponent';
import NavbarComponent from './Pages/NavbarComponent';
import TextInputComponent from './Pages/TextInputComponent'
import TextAreaCompont from './Pages/TextAreaComponent'
import TabMenuComponent from './Pages/TabMenuComponent'
import TabsComponent from './Pages/TabsComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="blogcard" element={<BlogCard />} />
        <Route path="profilecard" element={<ProfileCard />} />
        <Route path="badgecomponent" element={<BadgeComponent />} />
        <Route path="buttoncomponent" element={<ButtonComponent />} />
        <Route path="navbarcomponent" element={<NavbarComponent />} />
        <Route path="textinputcomponent" element={<TextInputComponent />} />
        <Route path="textareacomponent" element={<TextAreaCompont />} />
        <Route path="tabmenucomponent" element={<TabMenuComponent />} />
        <Route path="tabscomponent" element={<TabsComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
