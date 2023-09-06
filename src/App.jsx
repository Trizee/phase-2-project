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
import { inputClasses } from '@mui/material';






function App() {


  const [inCart, setInCart] = useState([])

  function handleClickBeige(){
    const newObj = {
      color: 'Beige',
      capacity: '32GB',
      price: '59.99'
    }
    setInCart([...inCart,newObj])
  }

  function handleClickWhite(){
    const newObj = {
      color: 'White',
      capacity: '64GB',
      price: '69.99'
    }
    setInCart([...inCart,newObj])
  }

  function handleClickPurple(){
    const newObj = {
      color: 'Purple',
      capacity: '128GB',
      price: '79.99'
    }
    setInCart([...inCart,newObj])
  }

  console.log(inCart)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path='/home' element={<Landing />}/>
        <Route path='/shop' element={<Shop handleClickBeige={handleClickBeige} handleClickPurple={handleClickPurple} handleClickWhite={handleClickWhite}/>}/>
        <Route path='/cart' element={<Cart inCart={inCart}/>}/>
        <Route path='/reviews' element={<Reviews />}/>
      </Route>
      
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App