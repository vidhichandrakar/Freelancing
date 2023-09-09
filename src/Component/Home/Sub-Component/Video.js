import React from 'react'

function Video() {
  return (
    <>
    <div className='Video mrgn'>
      <div>
        <h1>Video</h1>
      </div>
      <div className='Video_link'>
                <div>
                <video width="620"  controls>
                <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>                 
                </video>
                <p>the most amazing agricultural machinery</p>
                </div>
                <div>
                <video width="620" controls>
                <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>                 
                </video>
                <p>primitive farming equipment </p>
                </div>
    </div>
    </div>
    </>
  )
}

export default Video
