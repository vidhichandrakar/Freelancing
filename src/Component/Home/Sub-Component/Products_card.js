import React from 'react'

function Products_card(props) {
  return (
    <div>
    <a><img src={props.image} width={props.wsize} height={props.he}/></a>
    <p>{props.title}</p>
    <button>Send Enquiry</button>
    </div>
  )
}

export default Products_card
