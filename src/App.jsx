import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    )
  )
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
