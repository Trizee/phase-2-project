import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Reviews(){

    const [open, setOpen] = useState(false);
    const [name,setName] = useState('')
    const [review, setReview] = useState('')
    const [reviewArray, setReviewArray] = useState([])
    const [loading ,setLoading] = useState(false)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{

      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 2000)

      fetch('http://localhost:3000/reviews')
      .then(r => r.json())
      .then(data => setReviewArray(data))
    },[])

    function postReview(){
      const newReview ={
        name: name,
        review: review
      }
      fetch('http://localhost:3000/reviews',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview)
    })
      .then(r => r.json())
      .then(data => setReviewArray([...reviewArray,data]))
      handleClose()
    }

    function deleteReview(review){
      console.log(review.id)
      fetch(`http://localhost:3000/reviews/${review.id}`,{
        method: 'DELETE',
       })
       .then(r=>r.json())
       .then(data => setReviewArray(reviewArray.filter(card => card.id !== review.id)))
    }
  
    const reviewDisplay = reviewArray.map(individualCard => <ReviewCard key={individualCard.id} data={individualCard} deleteReview={deleteReview}/>)

    return(
    <>
        <h2 style={{textAlign: 'center',margin: '0'}}>See Reviews For Our Products</h2>
        <div className="d-grid gap-2 col-6 mx-auto">
             <button className="btn btn-secondary" type="button" onClick={handleClickOpen}>Write a Review</button>
         </div>
         {loading ? (
          <Box sx={{ display: 'flex' , alignContent: 'center', justifyContent: 'center', padding: '20vh'}}>
          <CircularProgress color="inherit"/>
        </Box>
         ): reviewDisplay }
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give us your honest feedback!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="review"
            label="Review"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>setReview(e.target.value)}
          />
          
        </DialogContent>
        
        <DialogActions>
          <Button onClick={()=>postReview()}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
    )
}

export default Reviews