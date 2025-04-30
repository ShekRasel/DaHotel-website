import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import AppLayout from './common components/AppLayout/AppLayout.jsx'
import OurRooms from './pages/OurRooms.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Gallery from './pages/Gallery.jsx'
import OurTeam from './pages/OurTeam.jsx'
import Price from './pages/Price.jsx'
import Faq from './pages/Faq.jsx'
import OurServices from './pages/OurServices.jsx'
import ServiceDetails from './pages/ServiceDetails.jsx'
import CompoentContext from './context/CompoentContext.jsx'

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
      },
      {
        path:'/ourrooms',
        element:<OurRooms/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path : 'blogs',
        element: <Blog/>
      },
      {
        path : 'gallery',
        element: <Gallery/>
      },
      {
        path : 'team',
        element : <OurTeam/>
      },
      {
        path: 'price',
        element : <Price/>
      },
      {
        path: 'faq',
        element: <Faq/>
      },
      {
        path : 'services',
        element : <OurServices/>
      },
      {
        path : 'servicesDetails',
        element : <ServiceDetails/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompoentContext>
    <RouterProvider router={routes}/>
    </CompoentContext>
  </StrictMode>,
)
