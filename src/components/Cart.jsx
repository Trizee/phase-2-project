import { Button} from "react-bootstrap"
import CartCards from "./CartCards"


function Cart({inCart, setInCart}){

    const cartDisplay = inCart.map(indiviualCard => <CartCards key={indiviualCard.color} indiviualCard={indiviualCard} handleRemove={handleRemove}/>)

    function handleRemove(color){
        setInCart(inCart.filter(cart => cart.color !== color))
    }

    return(
    <>
        <h2 style={{textAlign:'center'}}>In Your Cart</h2>
        {cartDisplay}
        <div class="d-grid gap-2 col-6 mx-auto">
             <button class="btn btn-secondary" type="button">Checkout</button>
         </div>
    </>
    )
}

export default Cart