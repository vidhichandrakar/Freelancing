import React, { Fragment } from 'react'
import "./main.css"

const Home = () => {
  return (
    <Fragment>
      <main id="main"> 
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">CATEGORY</a></li>
          <li><a href="services.html">PRODUCTS</a></li>
          <li><a href="projects.html" class="active">ABOUT US</a></li>
          <li>LOGOO KE LIYE</li>

          <li><a href="blog.html">GALLERY</a></li>
          <li><a href="contact.html">VIDEO</a></li>
          <li><a href="contact.html">TESTIMONIALS</a></li>
          <li class="dropdown"><a href="#"><span>MORE</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          
        </ul>
      </nav>
      
      {/* <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/breadcrumbs-bg.jpg');"> */}
      <div class="center container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Cultivating Ideas For Growth</h2>
        <button className='btn'>Enquire Now</button>

      </div>
    {/* </div> */}
    </main>

    </Fragment>
  )
}

export default Home
