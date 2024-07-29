import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VideoProvider } from './assets/context.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <VideoProvider>
    <App />
    </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
