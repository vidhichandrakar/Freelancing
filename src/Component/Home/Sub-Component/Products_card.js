import React from 'react'
import Button from '@mui/material/Button';

function Products_card(props) {
  return (
    <div>
    <a><img src={props.image} width={props.wsize} height={props.he}/></a>
    <p>{props.title}</p>
    <Button variant="contained" color="success">
        Send Enquiry
      </Button>
    </div>
  )
}

export default Products_card
