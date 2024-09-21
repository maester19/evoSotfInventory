import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home'
import { Inventaire } from './pages/inventaire'
import { Header } from './components/header'

  const  router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Header/>
        <div className="container"><Outlet/></div>
        </div>,
      children: [
        {
          path: "",
          element: <Home />,
      },{
        path: "inventaire",
        element: <Inventaire />,
      },
      ]
    }
  ])

  const PRODUCTS = [
    { name: "apple", stock: 10, price: "1$", magasin: "Super U"},
    { name: "dragonfruit", stock: 10, price: "2$", magasin: "Super U"},
    { name: "passionfruit", stock: 10, price: "4$", magasin: "Super U"},
    { name: "spinach", stock: 10, price: "1$", magasin: "Carrefour"},
    { name: "pumpkin", stock: 10, price: "2$", magasin: "Carrefour"},
    { name: "peas", stock: 10, price: "1$", magasin: "Carrefour"}
  ]

function App() {

  return <RouterProvider router={router} />
}

export default App
