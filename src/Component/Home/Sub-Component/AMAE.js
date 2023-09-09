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
      <Amae_Card className='row1' wsize = {400}  he ={250} imagePath={AB} title="Agriculture Baler"/>
      <Amae_Card className='row1' wsize = {400} he ={250} imagePath={MT} title="Multicrop Thresher"/>
      <Amae_Card className='row1' wsize = {400} he ={250} imagePath={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpj7kCNU08w_SCbekCYI8pLH_TXwuM7EzPPg&usqp=CAU'} title="Fertilizer Spreader"/>
      </div>
      <div className='Row1'>
      <Amae_Card className='row1' wsize = {400} he ={250} imagePath={MDP} title="Mounted Disc Plough"/>
      <Amae_Card className='row1' wsize = {400} he ={250} imagePath={AFD} title="agriculture Farm Digge"/>
      <Amae_Card className='row1' wsize = {400} he ={250} imagePath={LL} title="Land Leveler"/>
      </div>  
      </div>
    </>
  )
}

export default AMAE
