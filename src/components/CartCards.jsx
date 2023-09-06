import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartCards({indiviualCard, handleRemove}){
    return(
    <Card className="text-center">
      <Card.Header>Product</Card.Header>
      <Card.Body>
      <Card.Img src={indiviualCard.image} style={{maxHeight: '80px', maxWidth:'80px'}}/>
        <Card.Title>{indiviualCard.color}</Card.Title>
        <Card.Text>
         Capacity: {indiviualCard.capacity}
        </Card.Text>
        <Button variant="secondary" onClick={()=>handleRemove(indiviualCard.color)}>Remove Form Cart</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{indiviualCard.price}</Card.Footer>
    </Card>
    )
}

export default CartCards