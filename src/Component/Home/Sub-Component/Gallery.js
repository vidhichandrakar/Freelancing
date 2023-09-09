import React from 'react'
import g1 from './gallery1.jpg'
import g3 from './gallery3.webp'
import g2 from './gallery2.jpg'


function Gallery() {
  return (
    <>
    <div className='gallery' >
    <div>
        <h1 className='mrgn'>Gallery</h1>
    </div>
    <div className='gallery_img'>
      <img style={{borderRadius: '40px'}} src={g2} width={420} />
      <img style={{borderRadius: '40px'}} src={g1} width={420} />
      <img style={{borderRadius: '40px'}} src={g3} width={420} />
    </div>
    </div>
    </>
  )
}

export default Gallery
