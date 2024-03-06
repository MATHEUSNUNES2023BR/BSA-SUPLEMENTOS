import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/config.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import CatalogoIntegralMedica from './assets/catalogos-marcas/integralmedica.tsx'
import Atlhetica from './assets/catalogos-marcas/atlhetica.tsx'
import Absolut from './assets/catalogos-marcas/absolut.tsx'
import Bodyfood from './assets/catalogos-marcas/bodyfood.tsx'
import Unilife from './assets/catalogos-marcas/unilife.tsx'
import Duxcomercio from './assets/catalogos-marcas/duxcomercio.tsx'
import Bubleepump from './assets/catalogos-marcas/bubleepump.tsx'
import Iridiumlabs from './assets/catalogos-marcas/iridiumlabs.tsx'
import Maxinutri from './assets/catalogos-marcas/maxinutri.tsx'
import Naturovos from './assets/catalogos-marcas/naturovos.tsx'
import Nutrata from './assets/catalogos-marcas/nutrata.tsx'
import Nutringroup from './assets/catalogos-marcas/nutringroup.tsx'
import Sanavita from './assets/catalogos-marcas/sanavita.tsx'
import Sanibras from './assets/catalogos-marcas/sanibras.tsx'
import Vitabe from './assets/catalogos-marcas/vitabe.tsx'
import Vitale from './assets/catalogos-marcas/vitale.tsx'
import Maxtitanium from './assets/catalogos-marcas/maxtitanium.tsx'
import Probiotica from './assets/catalogos-marcas/probiotica.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />},
  {
    path:"catalogos/integralmedica",
    element: <CatalogoIntegralMedica />,
  },
  {
    path:"catalogos/atlhetica",
    element: <Atlhetica />,
  },
  {
    path:"catalogos/absolut",
    element: <Absolut />,
  },
  {
    path:"catalogos/bodyfood",
    element: <Bodyfood />,
  },
  {
    path:"catalogos/unilife",
    element: <Unilife />,
  },
  {
    path:"catalogos/duxcomercio",
    element: <Duxcomercio />,
  },
  {
    path:"catalogos/bubleepump",
    element: <Bubleepump />,
  },
  {
    path:"catalogos/iridiumlabs",
    element: <Iridiumlabs />,
  },
  {
    path:"catalogos/maxinutri",
    element: <Maxinutri />,
  },
  {
    path:"catalogos/naturovos",
    element: <Naturovos />,
  },
  {
    path:"catalogos/maxtitanium",
    element: <Maxtitanium />,
  },
  {
    path:"catalogos/nutrata",
    element: <Nutrata />,
  },
  {
    path:"catalogos/nutringroup",
    element: <Nutringroup />,
  },
  {
    path:"catalogos/sanavita",
    element: <Sanavita />,
  },
  {
    path:"catalogos/sanibras",
    element: <Sanibras />,
  },
  {
    path:"catalogos/vitabe",
    element: <Vitabe />,
  },
  {
    path:"catalogos/vitale",
    element: <Vitale />,
  },
  {
    path:"catalogos/probiotica",
    element: <Probiotica />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

