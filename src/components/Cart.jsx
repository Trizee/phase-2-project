import CartCards from "./CartCards"
import { useNavigate } from "react-router-dom"


function Cart({inCart, setInCart}){

    const cartDisplay = inCart.map(indiviualCard => <CartCards key={indiviualCard.color} indiviualCard={indiviualCard} handleRemove={handleRemove}/>)
    const navigate = useNavigate()

    function handleRemove(color){
        setInCart(inCart.filter(cart => cart.color !== color))
    }

    return(
    <>
        <h2 style={{textAlign:'center'}}>In Your Cart</h2>
        {cartDisplay}
        <div class="d-grid gap-2 col-6 mx-auto">
             <button class="btn btn-secondary" type="button" onClick={()=>navigate('/checkout')}>Checkout</button>
         </div>
    </>
    )
}

export default Cart