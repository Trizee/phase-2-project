import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function ThankYouPage({customerName}){

    const navigate = useNavigate()

    return(
        <Container fluid className='container' style={{
        paddingTop : '100px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        }}>
      <Row>
        <Col  style={{
        paddingTop : '175px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        }}>
        <div>
        <h1>Dear {customerName},</h1>
        <p  style={{margin: '10px'}}>I wanted to take a moment to express my heartfelt gratitude for your recent purchase of our product. We are thrilled that you chose our product, and we truly appreciate your support.

Your decision to trust us and select our product means a lot to our team. We've poured our passion and dedication into creating a product that we believe in, and your purchase reaffirms that we're on the right path.

We are committed to providing you with the highest quality and ensuring that you have a positive experience with our product. If you have any questions, feedback, or need assistance, please don't hesitate to reach out to our customer support team. We are here to assist you in any way we can.

Once again, thank you for your purchase. We look forward to serving you in the future and hope our product brings you great satisfaction. </p>
        </div>
        <Button variant="primary" size="lg" onClick={()=>navigate('/home')} style={{
            paddingTop: '10px',
            backgroundColor: 'black',
            color : 'white',
        }}>
          Start Over
        </Button>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
    )
}

export default ThankYouPage