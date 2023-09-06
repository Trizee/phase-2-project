import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layout/RootLayout';
import Landing from './components/Landing';
import Shop from './components/Shop';
import Cart from './components/Cart'
import Reviews from './components/Reviews';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path='/home' element={<Landing />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/reviews' element={<Reviews />}/>
    </Route>
    
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App