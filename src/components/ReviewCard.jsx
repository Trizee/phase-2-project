import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

function ReviewCard({data, deleteReview}){

    const {name} = data

    const [review, setReview] = useState(data.review)
    const [newReview , setNewReview] = useState('')
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

    console.log(newReview)

    function updateReview(data){
      fetch(`http://localhost:3000/reviews/${data.id}`,{
      
      Accept: "application/json",
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PATCH',

      body: JSON.stringify({
        review : newReview
      })
      })
      .then(r => r.json())
      .then(data => setReview(data.review))
      handleClose()
    }
  
    return (
      <>
        <Card style={{padding: '10px' , margin: '10px'}}>
          <Card.Header style={{textAlign: 'center'}}>Review
          <Button variant="text" color="error" style={{float: 'right'}} onClick={()=> deleteReview(data)}>
          🗑️
          </Button> 
          <Button variant="text" color="error" style={{float: 'right'}} onClick={handleClickOpen}>
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
         <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Edit</DialogTitle>
         <DialogContent>
           <DialogContentText>
             Make Changes
           </DialogContentText>
            <TextField
             autoFocus
             margin="dense"
             id="review"
             label="Edit Review"
             type="text"
             fullWidth
             variant="standard"
             onChange={(e)=>setNewReview(e.target.value)}
           />
           
         </DialogContent>
         
         <DialogActions>
           <Button onClick={()=>updateReview(data)}>Submit</Button>
         </DialogActions>
       </Dialog>
      </>
      );
}

export default ReviewCard