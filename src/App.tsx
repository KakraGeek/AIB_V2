
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Products from '@/pages/Products'
import Team from '@/pages/Team'
import Clients from '@/pages/Clients'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

// Debug component to log route changes
function RouteDebugger() {
  const location = useLocation()
  
  useEffect(() => {
    console.log('🌐 Route changed to:', location.pathname)
    console.log('📍 Full location:', location)
  }, [location])
  
  return null
}

function App() {
  return (
    <Router basename="/">
      <RouteDebugger />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="team" element={<Team />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
