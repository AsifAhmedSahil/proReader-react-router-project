import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Header from './components/Header'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import About from './components/About'
import Root from './components/Root'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    Children:[
      
      {
        path:'/home',
        element:<Home/>
      }
      
    ],
  },
])


function App() {
  return (
    <>
      
      <RouterProvider router={router}/>
    </>
  )
}

export default App
