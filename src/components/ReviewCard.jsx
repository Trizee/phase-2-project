import Card from 'react-bootstrap/Card';

function ReviewCard({data}){

    const {name , review} = data

    return (
        <Card style={{padding: '10px' , margin: '10px'}}>
          <Card.Header style={{textAlign: 'center'}}>Review</Card.Header>
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