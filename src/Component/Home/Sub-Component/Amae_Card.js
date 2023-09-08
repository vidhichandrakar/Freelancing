import React from 'react'
import Products_card from './Products_card'


function Amae_Card(props) {
  return (
    <div style={{padding:20 }} >
    <a><img width = {props.wsize} style={{borderRadius:"12px"}} height = {props.he} src={props.imagePath}/></a>
    <p>{props.title}</p>
    </div>
  )
}

export default Amae_Card
