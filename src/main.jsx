import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import AppLayout from './common components/AppLayout/AppLayout.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
