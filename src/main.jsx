import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <h2 className=' bg-amber-400 text-2xl font-bold text-center'>Hello</h2>
  </StrictMode>,
)
