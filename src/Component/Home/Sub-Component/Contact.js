import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact() {
  return (

    <div className='flex '>
      <h1>Contact us</h1>
      <section id="contact" className="contact">
        
      <div className="container" data-aos="fade-up" data-aos-delay="100">
<div className='four-box'>
        <div className="row gy-4">
          <div className="col-lg-3">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center ">
              <i className="bi bi-map"><MapIcon /></i>
              <h3>Office Address</h3>
              <p>Mumbai, Maharashtra </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"><AttachEmailIcon/></i>
              <h3>General Enquiries</h3>
              <p>websupport@justdial.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item box_s   d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"><PhoneIcon  /></i>
              <h3>Call Us</h3>
              <p>+91-8888888888</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item   d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-telephone"><AccessTimeIcon /></i>
              <h3>Our Timing</h3>
              <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
            </div>
          </div>
   </div>
 </div>


        <div className="row gy-4 mt-1 contact_row" >

        <div className="col">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">

              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
         </div>

        </div>

      </div>
    </section>


  </div>

  )
}

export default Contact
