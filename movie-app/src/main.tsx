import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MovieDetail from './MovieDatail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MovieDetail/>
  </StrictMode>,
)
