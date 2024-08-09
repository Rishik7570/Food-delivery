import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ShopContextProvider from './components/Shopcontext/Shopcontext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ShopContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShopContextProvider>
  </BrowserRouter>
)
