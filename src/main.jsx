import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './assets/components/Layout'
// Aquí importamos el loader que tenemos en el index, el que gracis a react router DOM podemos usar similar a un useEffect, ya que se ejecutará cuando esté vea un cambio
import Index, { loader as clientesLoader } from './assets/components/Index'
import NuevoCliente from './assets/pages/NuevoCliente'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Definiendo el router para pasarlo como prop al componente
const router = createBrowserRouter([
  {
    path:     '/',
    element:  <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader
      },
      {
        // Todo lo que este dentro de children va a heredar lo que contenga el componente Layout
        path:     '/cliente/nuevo',
        element:  <NuevoCliente/>
      }
    ]
  },
  {
    path: 'Otro',
    element: <h1>Esto es otro</h1>
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
