import { Button} from "react-bootstrap"
import CartCards from "./CartCards"


function Cart({inCart}){

    const cartDisplay = inCart.map(indiviualCard => <CartCards indiviualCard={indiviualCard}/>)

    return(
    <>
        <h2 style={{textAlign:'center'}}>In Your Cart</h2>
        {cartDisplay}
        <Button variant="primary" size="lg" href='shop' style={{
            backgroundColor: 'black',
            color : 'white',
        }}>
          Checkout
        </Button>
    </>
    )
}

export default Cart