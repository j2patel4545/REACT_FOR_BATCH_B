import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DigiContextProvider from './context/DigiContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <DigiContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DigiContextProvider>
)
