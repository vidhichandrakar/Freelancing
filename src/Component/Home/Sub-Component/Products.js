import React from 'react'
import Product from './Products_card'
import DMDP from './dISC MDP.jpg'
import SFS from './Single fertilizer Spreader.jpg'
import LLL from './Laser Land Leveler.jpg'
import PHD from './post hole digger.jpg'
import UT from './Unnati Thresher.jpg'
import RSB from './Round Straw Baler.jpg'

function Products() {
  return (
    <div className='product'>
    <h1> Products</h1>
    <div className='product_img'>
      <Product image={DMDP} wsize={220} he={150} title="Disc Mounted DiscPlough" link="" />
      <Product image={SFS}  wsize={220} he={150} title="Single fertilizer Spreader" link="" />
      <Product image={LLL}  wsize={220} he={150}  title="Laser Land Leveler" link="" />
      <Product image={PHD}  wsize={220} he={150} title="post hole digger" link="" />
      <Product image={UT}   wsize={220} he={150} title="Unnati Thresher" link="" />
      <Product image={RSB}  wsize={220} he={150} title="Round Straw Baler" link="" />
      </div>
    </div>
  )
}

export default Products
