import React from 'react'
import ReactDOM from 'react-dom/client'

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { StoreProvider } from './components/context/storeContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StoreProvider>
        <App /> 
    </StoreProvider>
    </BrowserRouter>
)
