import React from 'react'
import T3 from "./Testimonal3.jpg"
import T2 from "./Testimonal2.jpg"
import T1 from "./Testimonals1.jpg"
function Testimonals() {
  return (
    <div>
      <div id="carouselExampleIndicators" style={{width:'90%', marginLeft:'5%' }} class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" width={100} height={400} src={T1} alt="First slide" />
      <div class="carousel-caption d-none d-md-block test_center">
    <h1>Testimonal</h1>
    <p>Irregation has been made easy with these product </p>
    <h3>Praksh Soni</h3>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" width={500} height={400} src={T2}alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" width={500} height={400} src={T3} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>
    </div>
  )
}

export default Testimonals
