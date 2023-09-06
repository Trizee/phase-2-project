import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Landing(){

  const navigate = useNavigate()

 return(
    <Container fluid className='container' style={{
        paddingTop : '100px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        }}>
      <Row>
        <Col sm={8} style={{
        paddingTop : '175px',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        }}>
        <div className='heropage'>
        <h1>Experience the Future of Gaming Anywhere, Anytime with Our Portable Emulation Console!</h1>
        <p>Discover a new era of gaming with our cutting-edge portable emulation console. Embrace nostalgia as you play classic games
         or dive into the latest titles, all in the palm of your hand. With powerful performance and a vast library of games from various platforms, the possibilities are endless.
        Don't miss out on the ultimate gaming experience – get your portable emulation console today and redefine how you game!</p>
        </div>
        <Button variant="primary" size="lg" onClick={()=>navigate('/shop')} style={{
            backgroundColor: 'black',
            color : 'white',
        }}>
          Get Started
        </Button>
        </Col>
        <Col sm={2}><img className='heroimg' src='public/1d52e8380623022311d60d2a501a7b8.jpg'/></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
 )   
}

export default Landing