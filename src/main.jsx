import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Definiendo el router para pasarlo como prop al componente
const router = createBrowserRouter([
  {
    path:     '/',
    element:  <h1>Inicio</h1>
  },
  {
    path:     '/Nosotros',
    element:  <h1>Nosotros</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* Componente del Routing */}
      <RouterProvider
        router={router}
      />
  </React.StrictMode>
)
