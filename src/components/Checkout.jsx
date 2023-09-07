import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Checkout({total}){

    const [name,setName] = useState('')
    const [address, setAddress] = useState('')
    const [card , setCard] = useState('')


    return(
     <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10vw'
     }}>
        <h1>Total: $ {total} </h1>
         <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="password" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupCC">
        <Form.Label>Credit Card</Form.Label>
        <Form.Control type="number" placeholder="Enter Card Number" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
     </div>
    )
}

export default Checkout