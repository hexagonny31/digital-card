import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider, Helmet } from 'react-helmet-async'; 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
)