import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Checkout({total, setInCart ,setCustomerName}){

    const navigate = useNavigate()

    function postPayment(e){
      e.preventDefault()
      const newPayment ={
        amount: total,
        name: e.target.formGroupName.value,
        address: e.target.formGroupAddress.value,
        card: e.target.formGroupCC.value
      }
      setCustomerName(e.target.formGroupName.value)
      fetch('http://localhost:3000/checkouts',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPayment)
       })
       .then(r => r.json())
      e.target.reset()
      setInCart([])
      navigate('/thankyou')
    }

    return(
     <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10vw'
     }}>
        <h1>Total: $ {total} </h1>
         <Form onSubmit={postPayment}>
      <Form.Group className="mb-3" controlId="formGroupName" required>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress" required>
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupCC" required>
        <Form.Label>Credit Card</Form.Label>
        <Form.Control type="number" placeholder="Enter Card Number" required/>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form >
     </div>
    )
}

export default Checkout