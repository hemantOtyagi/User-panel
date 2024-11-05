import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Mynav from './Mynav.jsx'
import MyCarousel from './MyCarousel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mynav/>
    <MyCarousel/>
  </StrictMode>,
)
