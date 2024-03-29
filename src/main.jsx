// React DOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Style Sheets
import './index.css'

// Compponents
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Team from './Components/Team.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Profile from './Components/Profile.jsx'
import Domains from './Components/Domains.jsx'
import Students from './Components/Students.jsx'
import Recruiters from './Components/Recruiters.jsx'
import Questions from './Components/Question.jsx'
import Skills from './Components/Skills.jsx'


 const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"Placement-Team",
        element:<Team/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"My-Profile",
        element:<Profile/>
      },
      {
        path:"Domains",
        element:<Domains/>
      },
      {
        path:"Students-Placed",
        element:<Students/>
      },
      {
        path:"Our-Recruiters",
        element:<Recruiters/>
      },
      {
        path:"Interview-Questions",
        element:<Questions/>
      },
      {
        path:"Skills-in-Trend",
        element:<Skills/>
      }
    ]
  }
 ])

 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
 )
