import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ItenStore } from './context/ItensContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItenStore>
    <App />
    </ItenStore>
  </React.StrictMode>,
)
