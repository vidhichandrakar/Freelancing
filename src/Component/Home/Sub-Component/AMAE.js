import React from 'react'
import Amae_Card from "./Amae_Card"
import AB from "./Agriculture baler.jpg"
import MT from "./Multicrop Thresher.avif"
import FS from "./Fertilizer Spreader.jpg"
import MDP from "./Mounted Disc Plough.jpg"
import AFD from "./agriculture Farm Digge.jpg"
import LL from "./Land Leveler.jpg"

function AMAE() {
  return (
    <>
    <div className='AMAE_IMG'>
    <h1>Agriculture Machinery and equipment</h1>
      <div className='Row1'>
      <Amae_Card wsize = {300}  he ={300} imagePath={AB} title="Agriculture Baler"/>
      <Amae_Card wsize = {350} he ={300} imagePath={MT} title="Multicrop Thresher"/>
      <Amae_Card wsize = {200} he ={300} imagePath={FS} title="Fertilizer Spreader"/>
      </div>
      <div className='Row1'>
      <Amae_Card wsize = {300} he ={300} imagePath={MDP} title="Mounted Disc Plough"/>
      <Amae_Card wsize = {300} he ={300} imagePath={AFD} title="agriculture Farm Digge"/>
      <Amae_Card wsize = {300} he ={300} imagePath={LL} title="Land Leveler"/>
      </div>  
      </div>
    </>
  )
}

export default AMAE
