import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';

function ReviewCard({data, deleteReview}){

    const {name , review} = data
    

    return (
        <Card style={{padding: '10px' , margin: '10px'}}>
          <Card.Header style={{textAlign: 'center'}}>Review
          <Button variant="text" color="error" style={{float: 'right'}} onClick={()=> deleteReview(data)}>
          🗑️
          </Button> 
          <Button variant="text" color="error" style={{float: 'right'}}>
          📝
          </Button> 
          
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {review}
              </p>
              <footer className="blockquote-footer">
                {name}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      );
}

export default ReviewCard