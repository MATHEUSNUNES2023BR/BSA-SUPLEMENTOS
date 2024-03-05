import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/config.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import CatalogoIntegralMedica from './assets/catalogos-marcas/integralmedica.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />},
  {
    path:"catalogos/integralmedica",
    element: <CatalogoIntegralMedica />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

