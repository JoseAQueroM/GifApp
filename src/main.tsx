import { createRoot } from 'react-dom/client'
import { GifApp } from './GifApp'
import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style.css'



createRoot(document.getElementById('root')!).render(
  
    <StrictMode>
        <GifApp />
    </StrictMode>
)
