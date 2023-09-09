import React from 'react'
import about from './aboutimg.jpg'

function About() {
  return (
    <>
    <div >
    <div className='about'>
      <img className='aboutImg' src={about}/>
      <div className='about_content'>
        <h1>About</h1>
        <p>We, Global Agro Solutions located in Malad West, Mumbai, Maharashtra are engaged in manufacturing and trading, the best and premium quality of agricultural machinery and equipment. Our highly trained personnel proficiency is the result of our constant thirst to keep ourselves updated with the latest technology, required in manufacturing agricultural equipment. We always strive to improvise our machines and equipment in terms of technology and quality in order to satisfy our clients to the utmost level. Our huge client list is an effect of their satisfaction with our products with the cost effective prices and time bound delivery of the equipment.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default About
