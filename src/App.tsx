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

function App() {

  return <RouterProvider router={router} />
}

export default App
