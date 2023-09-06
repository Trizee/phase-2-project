import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layout/RootLayout';
import Landing from './components/Landing';
import Shop from './components/Shop';
import Cart from './components/Cart'
import Reviews from './components/Reviews';
import Checkout from './components/Checkout';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import { inputClasses } from '@mui/material';






function App() {

  const [total,setTotal] =useState(0)
  const [inCart, setInCart] = useState([])

  console.log(total)

  function handleClickBeige(){
    const newObj = {
      color: 'Beige',
      capacity: '32GB',
      price: '59.99',
      image: "https://m.media-amazon.com/images/I/51EmI3Vdt1L._AC_SL1100_.jpg"
    }
    setInCart([...inCart,newObj])
  }

  function handleClickWhite(){
    const newObj = {
      color: 'White',
      capacity: '64GB',
      price: '69.99',
      image: "https://m.media-amazon.com/images/I/5160txSdNOL._AC_SL1100_.jpg"
    }
    setInCart([...inCart,newObj])
  }

  function handleClickPurple(){
    const newObj = {
      color: 'Purple',
      capacity: '128GB',
      price: '79.99',
      image: "https://m.media-amazon.com/images/I/51lcOUZleqL._AC_SL1100_.jpg"
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
        <Route path='/cart' element={<Cart inCart={inCart} setInCart={setInCart}/>}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/checkout' element={<Checkout total={total}/>} />
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