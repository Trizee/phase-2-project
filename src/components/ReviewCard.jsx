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

    const {name , review} = data

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

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
           />
           
         </DialogContent>
         
         <DialogActions>
           <Button>Submit</Button>
         </DialogActions>
       </Dialog>
      </>
      );
}

export default ReviewCard