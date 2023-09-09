import React from 'react'
import g1 from './gallery1.jpg'
import g3 from './gallery3.webp'
import g2 from './gallery2.jpg'


function Gallery() {
  return (
    <>
    <div className='gallery'>
    <div>
        <h1>Gallery</h1>
    </div>
    <div className='gallery_img'>
    <img src={g2} width={400} />
      <img src={g1} width={400} />
      <img src={g3} width={400} />
    </div>
    </div>
    </>
  )
}

export default Gallery
