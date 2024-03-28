import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Placement_Team from './Components/Placement_Team.jsx'
import Development_Team from './Components/Development_Team'
import Contact_Team from './Components/Contact_Team.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "Home",
        element : <Home />
      },
      {
        path : "Placement_Team",
        element : <Placement_Team /> 
      },
      {
        path : "Development_Team",
        element : <Development_Team />
      },
      {
        path : "Contact_Team",
        element : <Contact_Team />
      },
      

      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
